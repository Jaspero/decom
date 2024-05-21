import { firestore } from '$lib/utils/firebase-admin';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const url = params.url.trim();

  const { docs } = await firestore
    .collection('pages')
    .where('url', '==', url)
    .where('active', '==', true)
    .limit(1)
    .get();

  const [doc] = docs;

  if (!doc) {
    return {};
  }

  const [htmlRef, styleRef] = await Promise.all([
    doc.ref.collection('content').doc('html').get(),
    doc.ref.collection('content').doc('css').get()
  ]);

  return {
    ...doc.data(),
    content: `${htmlRef.data()!.content}<style>${styleRef.data()!.content}</style>`
  };
};
