import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';

export async function load({ parent }) {
  await parent();

  const col = 'blog-categories';
  const items = [
    {
      component: 'jp-input',
      field: '/name',
      options: {
        required: true,
        label: 'Name',
        name: 'name'
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
      component: 'jp-textarea',
      field: '/description',
      options: {
        label: 'Description',
        name: 'description'
      }
    },
    ...META_FORM_FIELDS(col)
  ];

  return { col, items, value: {} };
}
