import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { getOptions } from '$lib/utils/get-options.js';
import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';
import { BucketImageService } from '$lib/services/image.service.js';
import { quillFiled } from '$lib/form-fields/quill.field.js';

export async function load({ params, parent }) {
  await parent();

  const authors: Array<{ label: string; value: string }> = [];
  const categories: Array<{ label: string; value: string }> = [];

  const { id } = params;
  const col = 'blog-articles';

  const imageService = new BucketImageService();
  (imageService.prefix = col + '/'),
    (imageService.metadata = [
      {
        height: 1000,
        width: 1000,
        filePrefix: 'thumb_m_',
        folder: '../../generated'
      },
      {
        width: 500,
        height: 500,
        filePrefix: 'thumb_s_',
        folder: '../../generated'
      }
    ]);

  const items = [
    {
      component: 'jp-input',
      field: '/title',
      options: {
        label: 'Title',
        name: 'title'
      }
    },
    {
      component: 'jp-input',
      field: '/id',
      options: {
        label: 'Url',
        name: 'url',
        hint: 'Generated from title if left empty.',
        readonly: id !== 'new'
      }
    },
    {
      component: 'jp-select',
      field: '/author',
      options: {
        label: 'Author',
        name: 'author',
        options: authors
      }
    },
    {
      component: 'jp-select',
      field: '/category',
      options: {
        label: 'Category',
        name: 'category',
        options: categories
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
      component: 'jp-file-upload',
      field: '/image',
      options: {
        name: 'featuredImage',
        service: imageService
      }
    },
    {
      component: 'jp-textarea',
      field: '/description',
      options: {
        label: 'Short description',
        name: 'shortDescription'
      }
    },
    ...META_FORM_FIELDS,
    quillFiled(col, 'content', 'Content')
  ];

  const datasets = await Promise.all([
    getOptions('blog-authors', 'name'),
    getOptions('blog-categories', 'name')
  ]);

  authors.push(...datasets[0]);
  categories.push(...datasets[1]);

  if (id === 'new') {
    return { col, items, value: {} };
  }

  const snap = await getDoc(doc(db, col, id));

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return { snap, col, items, value };
}
