import {initializeApp} from "firebase-admin/app";

initializeApp();

/**
 * Rest
 */
export {actioncontroller} from "./rest/action-controller";

/**
 * Triggers
 */
export {usercreated} from "./triggers/user-created";
export {adminupdated} from "./triggers/admin-updated";

/**
 * Callable
 */
export {createadmin} from "./callable/create-admin";
