import {initializeApp} from 'firebase-admin/app';
import {processCheckout} from './callable/process-checkout';
import {actioncontroller} from './rest/action-controller';
import {adminupdated} from './triggers/admin-updated';
import {usercreated} from './triggers/user-created';
import {productCreated} from './triggers/product-created';
import {stripeIntegration} from './rest/stripe-webhooks';

initializeApp();

export const cms = {
  // Rest
  actioncontroller,
  stripeIntegration,
  // Callable
  processCheckout,

  // Triggers
  adminupdated,
  usercreated,
  productCreated,
};
