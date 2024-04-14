import { getOptions } from '$lib/utils/get-options.js';
import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';
import { BucketImageService } from '$lib/services/image.service.js';
import { quillFiled } from '$lib/form-fields/quill.field.js';

export async function load({ parent }) {
  await parent();

  const authors: Array<{ label: string; value: string }> = [];
  const categories: Array<{ label: string; value: string }> = [];
  const col = 'blog-articles';
  const imageService = new BucketImageService();

  imageService.prefix = col + '/';
  imageService.metadata = [
    {
      folder: col + '/',
      width: 1080
    },
    {
      height: 1000,
      width: 1000,
      filePrefix: 'thumb_m_',
      folder: '../../thumbs'
    },
    {
      width: 500,
      height: 500,
      filePrefix: 'thumb_s_',
      folder: '../../thumbs'
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
      field: '/id',
      options: {
        label: 'Url',
        name: 'url',
        hint: 'Generated from title if left empty.',
        pattern: '[a-zA-Z0-9\\-_]+',
        minlength: 3,
        patternValidationMessage: `Only letters, numbers, '-' and '_' are valid in the URL.`,
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
        returnFormat: 'iso'
      }
    },
    {
      component: 'jp-file-upload',
      field: '/image',
      options: {
        name: 'featuredImage',
        label: 'Featured Image',
        service: imageService
      }
    },
    {
      component: 'jp-input',
      field: '/imageAlt',
      options: {
        label: 'Featured Image Alternative Description',
        name: 'imageAlt'
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
    ...META_FORM_FIELDS(col),
    quillFiled(col, 'content', 'Content')
  ];

  const datasets = await Promise.all([
    getOptions('blog-authors', 'name'),
    getOptions('blog-categories', 'name')
  ]);

  authors.push(...datasets[0]);
  categories.push(...datasets[1]);

  return { col, items, value: {} };
}
