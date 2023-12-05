import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {ENV_CONFIG} from "./consts/env-config";

let app;

// Check if any Firebase apps have already been initialized
if (!getApps().length) {
    app = initializeApp(ENV_CONFIG.firebase);
} else {
    app = getApps()[0]; // Use the already initialized app
}
export const db = getFirestore(app);