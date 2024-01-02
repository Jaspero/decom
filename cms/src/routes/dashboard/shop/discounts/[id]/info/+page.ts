import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';

export async function load({ params, parent }) {
  await parent();

  const { id } = params;
  const col = 'tags';

  const snap = await getDoc(doc(db, col, id));

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  return { id: snap.id, ...(snap.data() as any) };
}
