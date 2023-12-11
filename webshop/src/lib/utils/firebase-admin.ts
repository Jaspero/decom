import admin from 'firebase-admin';
import credential from '../../../key.json';

const app = admin.initializeApp(
  { credential: admin.credential.cert(credential as any) },
  'app-' + Date.now()
);

export const firestore = app.firestore();
