import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';

export async function load({ params, parent }) {
  await parent();

  const { id } = params;
  const col = 'tags';
  const items = [
    {
      component: 'jp-input',
      field: '/name',
      options: {
        label: 'Name',
        name: 'name'
      }
    },
    {
      component: 'jp-textarea',
      field: '/description',
      options: {
        label: 'Description',
        name: 'description'
      }
    }
  ];

  const snap = await getDoc(doc(db, col, id));

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return { snap, col, items, value };
}
