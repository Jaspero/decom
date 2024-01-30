import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { STATIC_CONFIG } from '../shared/consts/static-config.const';
import { stripeInstance } from '../shared/consts/stripeInstance.const';
import { FirestoreCollections } from '../shared/enums/firestore-collections.enum';

async function stripeCheckout(data) {
  let {
    stripeAmount,
  } = data;
  const {
    customer_email,
    stripeInterval,
    packId,
    discountAmount,
  } = data;

  const products = await stripeInstance.products.list({
    limit: 1,
  });
  let productId;

  if (products.data[0] && products.data[0].id) {
    productId = products.data[0].id;
  }

  if (!productId) {
    const product = await stripeInstance.products.create({
      name: 'Odina+ odabrane usluge',
    });
    productId = product.id;
  }
  let discounts;
  if (discountAmount) {

    await stripeInstance.coupons.create({
      duration: 'once',
      id: cuponId,
      currency: 'eur',
      amount_off: discountAmount,
    });
    discounts = {
      discounts: [{
        coupon: cuponId,
      }],
    };
    stripeAmount += discountAmount;
  }

  const lookup_key = JSON.stringify(stripeInterval + stripeAmount);
  const prices = await stripeInstance.prices.list({
    lookup_keys: [lookup_key],
    expand: ['data.product'],
  });

  let findPrice = prices.data.find((x) => (x.unit_amount === stripeAmount && stripeInterval === x.recurring.interval));

  if (!findPrice) {
    findPrice = await stripeInstance.prices.create({
      unit_amount: stripeAmount,
      lookup_key: lookup_key,
      currency: 'eur',
      recurring: {
        interval: stripeInterval,
        ...(stripeInterval === 'month' ? {interval_count: 6} : {}),
      },
      product: productId,
    });
  }

  const session = await stripeInstance.checkout.sessions.create({
    billing_address_collection: 'auto',
    line_items: [
      {
        price: findPrice.id,
        quantity: 1,
      },
    ],
    ...(discounts ? discounts : {}),
    mode: 'subscription',
    customer_email,
    success_url: `https://odina-plus.web.app/success?checkout=${packId}`,
    cancel_url: 'https://odina-plus.web.app/checkout',
    subscription_data: {
      metadata: {
        id: packId,
      },
    },
    custom_text: {
      after_submit: {
        message: 'Pretplatu možete otkazati najmanje 15 dana prije ponovne naplate.',
      },
    },
    consent_collection: {
      payment_method_reuse_agreement: {
        position: 'hidden',
      },
    },
  });
  return session.url;
}

export const processCheckout = functions
  .runWith({
    memory: '512MB',
    timeoutSeconds: 540,
  })
  .region(STATIC_CONFIG.cloudRegion)
  .https.onCall(async (data, context) => {
    const fs = admin.firestore();

    const lastPack = await fs.collection(FirestoreCollections.Orders).count().get();
    const orderNumber = String(lastPack.data().count + 1001).padStart(4, '0');

    const products = [];
    for (let i = 0; i < data.products; i++) {

      const product = data.products[i];
      const productsRefs = await fs.collection(FirestoreCollections.Products)
        .doc(product.id).get();

      if (productsRefs) {
        const prodData: any = productsRefs.data();
        const variant = Object.values(product.selectedVariant).join('-');
        const found = prodData.variantCombinations.find(x => x.variant === variant);

        let price = prodData.price;

        if (found) {
          price = found.price;
        }
        products.push({
          price,
          variant,
          id: product.id
        });
      }
    }

    try {
      const customerRefs = await fs.collection(FirestoreCollections.Customers).doc(data.customerId).get();
      const customerData = customerRefs.data();
      if (customerData) {
        fs.collection(FirestoreCollections.Customers).doc(data.customerId).set({
          created: Date.now(),
          email: data.email
        });
      }
    } catch (e) {
      console.log('Something went wrong');
    }
    fs.collection(FirestoreCollections.Orders).add({
      orderNumber,
      products,
      customer: data.customerId
    }).then();
    stripeCheckout(data)
    return true;
  });
