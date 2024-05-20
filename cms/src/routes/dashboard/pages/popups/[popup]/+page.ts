import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';
import { BucketImageService } from '$lib/services/image.service.js';
import type { PageBuilderForm } from '$lib/page-builder/page-builder-form.interface.js';

export async function load({ params, parent }) {
  await parent();

  const { popup } = params;
  const col = 'landing-page-popups';
  
  const imageService = new BucketImageService();
  imageService.prefix = col + '/',
  imageService.metadata = [
    {
			folder: 'landing-pages/',
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
      component: 'jp-textarea',
      field: '/description',
      options: {
        label: 'Description',
        name: 'description'
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

  const [pagesSnap, formSnaps] = await Promise.all([
    getDocs(collection(db, 'landing-page-popups')),
    getDocs(collection(db, 'landing-page-forms'))
  ]);

  const forms = formSnaps.docs.map(doc => ({
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

  if (popup === 'new') {
    return {
      col,
      items,
      metaItems: META_FORM_FIELDS(col),
      value: {},
      pages,
      forms
    };
  }

  pages = pages.filter(p => p.id !== popup);

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, popup)),
    getDoc(doc(db, col, popup, 'content', 'json')),
  ]);

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = {id: snap.id, ...snap.data() as any};

  return {
    snap,
    col,
    items,
    metaItems: META_FORM_FIELDS(col),
    value,
    json: jsonSnap?.data(),
    pages
  };
}
