import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { BucketImageService } from '$lib/services/image.service.js';
import type {PageBuilderForm} from '$lib/page-builder/page-builder-form.interface';

export async function load({ params, parent }) {
  await parent();

  const { section } = params;
  const col = 'sections';
  
  const imageService = new BucketImageService();
  imageService.prefix = col + '/',
  imageService.metadata = [
    {
			folder: 'pages/',
			width: 1080
		}
  ];

  const items = [
    {
      component: 'jp-input',
      field: '/title',
      options: {
        label: 'Title',
        name: 'title',
        required: true
      }
    },
    {
      component: 'jp-input',
      field: '/category',
      options: {
        label: 'Category',
        name: 'category',
        required: true
      }
    },
    {
      component: 'jp-file-upload',
      field: '/image',
      options: {
        label: 'Featured Image',
        name: 'featuredImage',
        service: imageService
      }
    }
  ];

  const [pagesSnap, popupsSnap, formsSnap] = await Promise.all([
    getDocs(collection(db, 'sections')),
    getDocs(collection(db, 'popups')),
    getDocs(collection(db, 'forms')),
  ]);

  const popups = (
    await Promise.all(
      popupsSnap.docs.map(async d => {
        const data = d.data();

        const htmlSnap = await getDoc(doc(db, 'popups', d.id, 'content', 'html'));
        const styleSnap = await getDoc(doc(db, 'popups', d.id, 'content', 'css'));

        return {
          id: d.id,
          title: data.title,
          html: htmlSnap?.data(),
          style: styleSnap?.data(),
          description: data.description,
          image: data.image
        }
      })
    )
  );

  const forms = formsSnap.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  })) as PageBuilderForm[];

  let pages = pagesSnap.docs
    .map(it => {
      const dt = it.data();

      return {
        id: it.id,
        title: dt.title,
        active: dt.active
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  if (section === 'new') {
    return {
      col,
      items,
      value: {},
      pages,
      popups,
      forms
    };
  }

  pages = pages.filter(p => p.id !== section);

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, section)),
    getDoc(doc(db, col, section, 'content', 'json'))
  ]);

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = {id: snap.id, ...snap.data() as any};

  return {
    snap,
    col,
    items,
    value,
    json: jsonSnap?.data(),
    pages,
    popups,
    forms
  };
}
