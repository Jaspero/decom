import { initializeApp } from 'firebase-admin/app';

initializeApp();

export { actioncontroller } from './rest/action-controller';

export { usercreated } from './triggers/user-created';
