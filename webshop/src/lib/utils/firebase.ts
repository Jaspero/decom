import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, type User } from 'firebase/auth';
import type { User as DbUser } from '../types/user.interface';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { writable } from 'svelte/store';
import { ENV_CONFIG } from '../consts/env-config';
import { getFunctions } from 'firebase/functions';

export const firebaseApp = initializeApp(ENV_CONFIG.firebase);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);
export const functions = getFunctions(firebaseApp, ENV_CONFIG.region);

export const authenticated = writable<null | false | User>(null);
export const user = writable<null | DbUser>(null);

onAuthStateChanged(auth, async (authUser) => {
  if (authUser) {
    try {
      const userRef = doc(db, 'customers', authUser.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        user.set({ id: authUser.uid, ...userData } as DbUser);
      } else {
        user.set({ id: authUser.uid } as any);
      }
    } catch (error) {
      console.error('Error getting document:', error);
    }
  } else {
    user.set(null);
  }

  authenticated.set(authUser ? authUser : false);
});
