import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { ENV_CONFIG } from '../consts/env-config';
import { getFunctions } from 'firebase/functions';

export const firebaseApp = initializeApp(ENV_CONFIG.firebase);
export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);
export const functions = getFunctions(firebaseApp, ENV_CONFIG.region);
