import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';
import { getFirestore, getDoc, doc } from 'firebase/firestore';
import { writable } from 'svelte/store';
import { getStorage } from 'firebase/storage';
import { ENV_CONFIG } from './env-config';
import type { FirestoreUser } from '../interfaces/firestore-user.interface';

export const firebaseApp = initializeApp(ENV_CONFIG);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);
export const db = getFirestore(firebaseApp);

export const authenticated = writable<null | false | User>(null);
export const user = writable<null | FirestoreUser>(null);
export const token = writable<null | any>(null);

onAuthStateChanged(auth, async (authUser) => {
  if (authUser) {
    authUser.getIdToken().then((result) => {
      token.set(result);
    });

    try {
      const userRef = doc(db, 'users', authUser.uid);
      const docSnap = await getDoc(userRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        user.set({ id: authUser.uid, ...userData } as FirestoreUser);
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
