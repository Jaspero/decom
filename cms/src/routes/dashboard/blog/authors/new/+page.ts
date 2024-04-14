import { BucketImageService } from '$lib/services/image.service';
import { quillFiled } from '$lib/form-fields/quill.field.js';
import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';

export async function load({ parent }) {
  await parent();

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

  const items = [
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
        patternValidationMessage: `Only letters, numbers, '-' and '_' are valid in the URL.`,
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

  return {
    col,
    items,
    value: {}
  };
}
