import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';

export async function load({ params, parent }) {
  await parent();

  const { id, comment } = params;

  const items = [
    {
      component: 'jp-textarea',
      field: '/comment',
      options: {
        label: 'Comment',
        name: 'comment'
      }
    },
    {
      component: 'jp-input',
      field: '/authorName',
      options: {
        label: 'Author',
        name: 'author'
      }
    },
    {
      component: 'jp-datepicker',
      field: '/createdOn',
      options: {
        label: 'Created On',
        returnFormat: 'iso'
      }
    }
  ];

  const snap = await getDoc(doc(db, 'blog-articles', id, 'blog-comments', comment));

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return { snap, items, value };
}
