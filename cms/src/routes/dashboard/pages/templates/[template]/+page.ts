import {db} from '$lib/utils/firebase';
import {redirect} from '@sveltejs/kit';
import {collection, doc, getDoc, getDocs} from 'firebase/firestore';
import {BucketImageService} from '$lib/services/image.service.js';
import type {PageBuilderForm} from '$lib/page-builder/page-builder-form.interface';

export async function load({params, parent}) {
  await parent();

  const {template} = params;
  const col = 'landing-page-templates';

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

  const [pagesSnap, sectionsSnap, popupsSnap, formsSnap] = await Promise.all([
    getDocs(collection(db, 'landing-pages')),
    getDocs(collection(db, 'landing-page-sections')),
    getDocs(collection(db, 'landing-page-popups')),
    getDocs(collection(db, 'landing-page-forms')),
  ]);

  const popups = (
    await Promise.all(
      popupsSnap.docs.map(async d => {
        const data = d.data();

        const htmlSnap = await getDoc(doc(db, 'landing-page-popups', d.id, 'content', 'html'));
        const styleSnap = await getDoc(doc(db, 'landing-page-popups', d.id, 'content', 'css'));

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

  const sections = (
    await Promise.all(
      sectionsSnap.docs.map(async d => {
        const data = d.data();

        const jsonSnap = await getDoc(doc(db, 'landing-page-sections', d.id, 'content', 'json'));

        return {
          id: d.id,
          title: data.title,
          json: jsonSnap?.data(),
          category: data.category,
          image: data.image
        }
      })
    )
  )
    .reduce((acc: any[], cur) => {

      const {category, ...data} = cur;
      const idx = acc.findIndex(it => it.category === category);

      if (idx === -1) {
        acc.push({
          category,
          sections: [data]
        });
      } else {
        acc[idx].sections.push(data);
      }

      return acc;
    }, []);

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

  if (template === 'new') {
    return {
      col,
      items,
      value: {},
      pages,
      sections,
      popups,
      forms
    };
  }

  pages = pages.filter(p => p.id !== template);

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, template)),
    getDoc(doc(db, col, template, 'content', 'json'))
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
    sections,
    popups,
    forms
  };
}
