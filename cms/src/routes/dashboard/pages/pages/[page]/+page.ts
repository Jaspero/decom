import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';
import { BucketImageService } from '$lib/services/image.service.js';
import type { PageBuilderForm } from '$lib/page-builder/page-builder-form.interface';
import { getOptions } from '../../../../../lib/utils/get-options';

export async function load({ params, parent }) {
  await parent();

  const { page } = params;
  const col = 'pages';

  const imageService = new BucketImageService();
  (imageService.prefix = col + '/'),
    (imageService.metadata = [
      {
        folder: 'pages/',
        width: 1080
      }
    ]);
  const layouts: Array<{ label: string; value: string }> = [];

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
      field: '/url',
      options: {
        label: 'URL',
        name: 'url',
        pattern: '[a-z0-9\\-]+'
      }
    },
    {
      component: 'jp-datepicker',
      field: '/publicationDate',
      options: {
        label: 'Publication Date',
        returnFormat: 'unix'
      }
    },
    {
      component: 'jp-select',
      field: '/header',
      options: {
        label: 'Header',
        options: layouts
      }
    },
    {
      component: 'jp-select',
      field: '/footer',
      options: {
        label: 'Footer',
        options: layouts
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

  const [pagesSnap, sectionsSnap, templatesSnap, popupsSnap, formsSnap, layoutData] =
    await Promise.all([
      getDocs(collection(db, 'pages')),
      getDocs(collection(db, 'sections')),
      getDocs(collection(db, 'templates')),
      getDocs(collection(db, 'popups')),
      getDocs(collection(db, 'forms')),
      getOptions('layouts', 'name')
    ]);

  layouts.push(...layoutData);

  const sections = (
    await Promise.all(
      sectionsSnap.docs.map(async (d) => {
        const data = d.data();

        const jsonSnap = await getDoc(doc(db, 'sections', d.id, 'content', 'json'));

        return {
          id: d.id,
          title: data.title,
          json: jsonSnap?.data(),
          category: data.category,
          image: data.image
        };
      })
    )
  ).reduce((acc: any[], cur) => {
    const { category, ...data } = cur;
    const idx = acc.findIndex((it) => it.category === category);

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

  const templates = (
    await Promise.all(
      templatesSnap.docs.map(async (d) => {
        const data = d.data();

        const jsonSnap = await getDoc(doc(db, 'templates', d.id, 'content', 'json'));

        return {
          id: d.id,
          title: data.title,
          json: jsonSnap?.data(),
          category: data.category,
          image: data.image
        };
      })
    )
  ).reduce((acc: any[], cur) => {
    const { category, ...data } = cur;
    const idx = acc.findIndex((it) => it.category === category);

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

  const popups = await Promise.all(
    popupsSnap.docs.map(async (d) => {
      const data = d.data();

      const htmlSnap = await getDoc(doc(db, 'page-popups', d.id, 'content', 'html'));
      const styleSnap = await getDoc(doc(db, 'page-popups', d.id, 'content', 'css'));

      return {
        id: d.id,
        title: data.title,
        html: htmlSnap?.data(),
        style: styleSnap?.data(),
        description: data.description,
        image: data.image
      };
    })
  );

  const forms = formsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  })) as PageBuilderForm[];

  let pages = pagesSnap.docs
    .map((it) => {
      const dt = it.data();

      return {
        id: it.id,
        title: dt.title,
        active: dt.active
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));

  if (page === 'new') {
    return {
      col,
      items,
      metaItems: META_FORM_FIELDS(col),
      value: {},
      pages,
      sections,
      templates,
      popups,
      forms
    };
  }

  pages = pages.filter((p) => p.id !== page);

  const [snap, jsonSnap] = await Promise.all([
    getDoc(doc(db, col, page)),
    getDoc(doc(db, col, page, 'content', 'json'))
  ]);

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return {
    snap,
    col,
    items,
    metaItems: META_FORM_FIELDS(col),
    value,
    json: jsonSnap?.data(),
    pages,
    sections,
    templates,
    popups,
    forms
  };
}
