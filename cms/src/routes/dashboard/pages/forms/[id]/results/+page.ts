import { doc, getDoc } from 'firebase/firestore';
import { db } from '$lib/utils/firebase';

export async function load({ parent, params }) {
  await parent();

  const formRef = await getDoc(doc(db, 'forms', params.id));

  return formRef.data();
}
