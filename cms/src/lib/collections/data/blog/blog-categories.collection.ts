import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { datePipe } from '../../../column-pipes/date.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { releaseStatusPipe } from '../../../column-pipes/release-status.pipe';
import { META_FORM_FIELDS } from '../../../consts/meta.form-fields';
import { generateSlug } from '../../../utils/generate-slug';
import { collections } from '../../collections';

collections.addCollection('blog-categories', {
  name: 'Kategorije',
  singularName: 'kategoriju',
  module: 'blog',
  tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/url',
      label: 'URL'
    },
    {
      key: '/name',
      label: 'Name'
    },
    {
      key: '/description',
      label: 'Description'
    },
    {
      key: '/lastUpdatedOn',
      label: 'Status',
      pipes: [releaseStatusPipe()],
      exportPipes: [datePipe]
    },

    {
      key: 'id',
      label: '',
      pipes: [
        actionsPipe((id) => ({
          actions: ['duplicate', 'delete'],
          links: [
            {
              label: 'Edit',
              href: `blog-categories/${id}`,
              icon: 'edit'
            },
            {
              label: 'Reporting',
              href: `blog-categories/${id}/reporting`,
              icon: 'monitoring'
            }
          ]
        }))
      ]
    }
  ],
  initialSort: { key: 'name', direction: 'asc' },
  editKey: 'name',
  form: async () => [
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
      field: '/url',
      options: {
        label: 'Url',
        name: 'url',
        hint: 'Generated from name if left empty.',
        pattern: '[a-zA-Z0-9\\-_]+',
        minlength: 3,
        patternValidationMessage: `Only letters, numbers, '-' and '_' are valid in the URL.`
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
    ...META_FORM_FIELDS('blog-categories')
  ],

  preSubmit: async (id, value) => {
    value.lastUpdatedOn = new Date().toISOString();
  },
  preCreate: async (id, value) => {
    value.url = value.url || generateSlug(value.name);
    value.publicationDate = value.publicationDate || new Date().toISOString();
  },
  idPrefix: 'bc'
});
