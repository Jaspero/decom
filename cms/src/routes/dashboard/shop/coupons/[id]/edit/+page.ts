import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { COUPON_FORM } from '../../_coupon-form.const.js';

export async function load({ params, parent }) {
  await parent();

  const { id } = params;
  const col = 'coupons';
  const items = COUPON_FORM;

  const snap = await getDoc(doc(db, col, id));

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return { snap, col, items, value };
}
