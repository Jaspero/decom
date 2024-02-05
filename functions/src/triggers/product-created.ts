import * as functions from 'firebase-functions';
import { FirestoreCollections } from '../shared/enums/firestore-collections.enum';
import * as admin from 'firebase-admin';
import { stripeInstance } from '../shared/consts/stripeInstance.const';
import { toStripeFormat } from '../shared/utils/to-stripe-format';

export const productCreated = functions
    .runWith({
        memory: '512MB',
        timeoutSeconds: 540
    })
    .firestore.document(`${FirestoreCollections.Products}/{documentId}`)
    .onCreate(async (snap, context) => {
        const fs = admin.firestore();
        const {documentId} = context.params;
        const productData = (await fs.collection(FirestoreCollections.Products).doc(documentId).get()).data();

        const product = await stripeInstance.products.create({
            name: productData.name,
            currency: 'EUR',
            unit_amount: toStripeFormat(productData.price)
        });

        await fs.collection(FirestoreCollections.Products)
            .doc(documentId)
            .update({
                stripeId: product.id
            })
    });
