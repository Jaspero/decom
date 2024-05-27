import { initializeApp } from 'firebase-admin/app';

initializeApp();

/**
 * Callable
 */
export { createadmin } from './callable/create-admin';

/**
 * Triggers
 */
export { adminupdated } from './triggers/admin-updated';

// Pages cleanup
export { pageDeleted } from './triggers/page-deleted';
export { layoutDeleted } from './triggers/layout-deleted';
export { popupDeleted } from './triggers/popup-deleted';
export { sectionDeleted } from './triggers/section-deleted';
export { templateDeleted } from './triggers/template-deleted';

/**
 * Rest
 */
export { actioncontroller } from './rest/action-controller';
