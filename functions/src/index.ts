import {initializeApp} from 'firebase-admin/app';
import { processCheckout } from './callable/process-checkout';
import { actioncontroller } from './rest/action-controller';
import { adminupdated } from './triggers/admin-updated';
import { usercreated } from './triggers/user-created';

initializeApp();

export const cms = {
  //Rest
  actioncontroller,
  //Callable
  processCheckout,

  // Triggers
  adminupdated,
  usercreated

};
