import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { DISCOUNT_FORM } from '../../_discount-form.const.js';

export async function load({ params, parent }) {
  await parent();

  const { id } = params;
  const col = 'discounts';
  const items = DISCOUNT_FORM;

  const snap = await getDoc(doc(db, col, id));

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return { snap, col, items, value };
}
