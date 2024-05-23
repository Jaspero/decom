import * as express from 'express';
import * as functions from 'firebase-functions';
import {logger} from 'firebase-functions';
import {constants} from 'http2';
import {ENV_CONFIG} from '../shared/consts/env-config.const';
import {stripeInstance} from '../shared/consts/stripeInstance.const';
import {CORS} from '../shared/consts/cors-whitelist.const';

const app = express();
app.use(CORS);

app.post('/webhook', (req, res) => {
  async function exec() {
    const sig = req.headers['stripe-signature'] as string;
    // const fs = firestore();

    let event = null;
    try {
      event = stripeInstance.webhooks.constructEvent(
        (req as any).rawBody,
        sig,
        ENV_CONFIG.stripe.webhook
      );
    } catch (err) {
      // invalid signature

      logger.error('Error: ', err);
      res.status(constants.HTTP_STATUS_BAD_REQUEST).end();
      return;
    }

    const {object}: any = event.data;

    // const orderRefs = await fs
    //   .collection(FirestoreCollections.Orders)
    //   .doc(object.subscription_details.metadata.id)
    //   .get();
    // const orderData = orderRefs.data();

    console.log('Payment for: ', object.subscription_details.metadata.id);
    switch (event.type) {
    case 'invoice.paid':
      break;
    case 'invoice.voided':
    case 'invoice.payment_failed':
      break;
    }
  }

  exec()
    .then(() => res.sendStatus(constants.HTTP_STATUS_OK))
    .catch(() => res.sendStatus(constants.HTTP_STATUS_OK));
});

export const stripeIntegration = functions
  .runWith({
    memory: '512MB',
    timeoutSeconds: 540,
  })
  .https.onRequest(app);
