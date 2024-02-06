import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import { STATIC_CONFIG } from '../shared/consts/static-config.const';
import { stripeInstance } from '../shared/consts/stripeInstance.const';
import { FirestoreCollections } from '../shared/enums/firestore-collections.enum';
import { toStripeFormat } from '../shared/utils/to-stripe-format';

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

      const settings: any = (await fs.collection(FirestoreCollections.Settings).doc('status').get()).data();
      const currency = data.currency || settings.primaryCurrency;

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
          const stripeProduct = await stripeInstance.products.retrieve(product.stripeId);
          const stripePriceFormat = toStripeFormat(price);

          const lookup_key: any = JSON.stringify(product.id + stripePriceFormat + currency);
          const prices = await stripeInstance.prices.list({
            lookup_keys: [lookup_key],
            expand: ['data.product'],
          });

          let findPrice = prices.data.find((x) => (x.unit_amount === stripePriceFormat));

          if (!findPrice) {
            findPrice = await stripeInstance.prices.create({
              unit_amount: stripePriceFormat,
              lookup_key: lookup_key,
              currency,
              product: stripeProduct,
            });
          }

          products.push({
            price,
            quantity: product.quantity,
            variant,
            id: product.id,
            stripeProduct,
            findPrice,
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

      const processData = {
        orderNumber,
        products,
        customer: data.customerId,
        email: data.email,
        paid: false
      };

      fs.collection(FirestoreCollections.Orders).add(processData).then();

      const session = await stripeInstance.checkout.sessions.create({
        line_items: products.map(x => ({price: x.findPrice, quantity: x.quantity})),
        mode: 'payment',
        customer_email: data.email,
        success_url: `https://some-url${packId}`,
        cancel_url: 'https://some-url/checkout',
        subscription_data: {
          metadata: {
            orderNumber
          },
        }
      });
      return session.url;
    });
