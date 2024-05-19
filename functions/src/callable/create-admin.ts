import {HttpsError, onCall} from 'firebase-functions/v2/https';
import {hasRole} from '../shared/utils/authenticate';
import {getAuth, UserRecord} from 'firebase-admin/auth';
import {random} from '@jaspero/utils';
import {getFirestore} from 'firebase-admin/firestore';
import {REGION} from '../shared/consts/region.const';

interface RequestData {
  email: string;
  role: string;
  name: string;
  password?: string;
}

export const createadmin = onCall<RequestData>(
  {maxInstances: 1, region: REGION},
  async (request) => {
    hasRole(request, ['admin']);

    const auth = getAuth();
    const firestore = getFirestore();
    const {role, name, password = random.string(32)} = request.data;

    if (!role || !name || !request.data.email) {
      throw new HttpsError('invalid-argument', 'Missing required fields');
    }

    const email = request.data.email.replace(/ /g, '').toLowerCase();

    const adminsRef = await firestore
      .collection('admins')
      .where('email', '==', email)
      .limit(1)
      .get();

    if (!adminsRef.empty) {
      throw new HttpsError('already-exists', 'Admin already exists');
    }

    let user: UserRecord | null = null;

    try {
      user = await auth.getUserByEmail(email);
    } catch {}

    if (!user) {
      try {
        user = await auth.createUser({email, password});
      } catch (e: any) {
        throw new HttpsError('internal', e.message);
      }
    }

    await Promise.all([
      auth.setCustomUserClaims(user.uid, {role}),
      firestore.collection('admins').doc(user.uid).set({
        createdOn: Date.now(),
        email,
        name,
        role,
      }),
    ]);
  }
);
