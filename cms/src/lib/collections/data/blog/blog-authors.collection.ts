import { actionsPipe } from '../../../column-pipes/actions.pipe';
import { datePipe } from '../../../column-pipes/date.pipe';
import { imagePipe } from '../../../column-pipes/image.pipe';
import { indexPipe } from '../../../column-pipes/index.pipe';
import { releaseStatusPipe } from '../../../column-pipes/release-status.pipe';
import { META_FORM_FIELDS } from '../../../consts/meta.form-fields';
import { quillFiled } from '../../../form-fields/quill.field';
import { BucketImageService } from '../../../services/image.service';
import { collections } from '../../collections';

collections.addCollection('blog-authors', {
  name: 'Authors',
  singularName: 'authors',
  module: 'blog',
  tableHeaders: [
    {
      key: '/id',
      label: '#',
      pipes: [indexPipe]
    },
    {
      key: '/image',
      label: 'Image',
      pipes: [imagePipe()],
      exportPipes: []
    },
    {
      key: '/name',
      label: 'Name'
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
              href: `blog-authors/${id}`,
              icon: 'edit'
            },
            {
              label: 'Reporting',
              href: `blog-authors/${id}/reporting`,
              icon: 'monitoring'
            }
          ]
        }))
      ]
    }
  ],
  initialSort: { key: 'name', direction: 'asc' },
  editKey: 'name',
  form: async () => {
    const col = 'blog-authors';
    const imageService = new BucketImageService();

    imageService.prefix = col + '/';
    imageService.metadata = [
      {
        filePrefix: 'thumb_',
        height: 100,
        webpVersion: true,
        width: 100,
        folder: '../../thumbs'
      }
    ];

    return [
      {
        component: 'jp-input',
        field: '/name',
        options: {
          label: 'Name',
          name: 'name',
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
          patternValidationMessage: `Only letters, numbers, '-' and '_' are valid in the URL.`
        }
      },
      {
        component: 'jp-file-upload',
        field: '/image',
        options: {
          label: 'Image',
          name: 'image',
          service: imageService
        }
      },
      quillFiled(col, 'about', 'About'),
      ...META_FORM_FIELDS(col)
    ];
  },
  preSubmit: async (id, value) => {
    value.lastUpdatedOn = new Date().toISOString();
  },
  idPrefix: 'bau'
});
