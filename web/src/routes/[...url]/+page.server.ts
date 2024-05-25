import { firestore } from '$lib/utils/firebase-admin';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
  const url = params.url.trim();

  const { docs } = await firestore
    .collection('pages')
    .where('url', '==', '/' + url)
    .where('active', '==', true)
    .limit(1)
    .get();

  const [doc] = docs;

  if (!doc) {
    return {};
  }

  const toLoad: any[] = [
    doc.ref.collection('content').doc('html').get(),
    doc.ref.collection('content').doc('css').get()
  ];

  const data = doc.data();

  if (data.header) {
    toLoad.push(
      firestore.collection('layouts').doc(data.header).collection('content').doc('html').get(),
      firestore.collection('layouts').doc(data.header).collection('content').doc('css').get()
    );
  }

  if (data.footer) {
    toLoad.push(
      firestore.collection('layouts').doc(data.footer).collection('content').doc('html').get(),
      firestore.collection('layouts').doc(data.footer).collection('content').doc('css').get()
    );
  }

  const [htmlRef, styleRef, ...layoutRefs] = await Promise.all(toLoad);
  const content = [layoutRefs[0], htmlRef, layoutRefs[2]].reduce((acc, cur) => {
    if (cur?.exists) {
      acc += cur.data()!.content || '';
    }
    return acc;
  }, '');
  const style = [layoutRefs[1], styleRef, layoutRefs[3]].reduce((acc, cur) => {
    if (cur?.exists) {
      acc += cur.data()!.content || '';
    }
    return acc;
  }, '');

  return {
    ...data,
    content: `${content}<style>${style}</style>`
  };
};
