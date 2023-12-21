import { BucketImageService } from '$lib/services/image.service';
import { quillFiled } from '$lib/form-fields/quill.field.js';

export async function load({ parent }) {
  await parent();

  const col = 'blog-authors';

  const imageService = new BucketImageService();
  (imageService.prefix = col + '/'),
    (imageService.metadata = [
      {
        filePrefix: 'thumb_',
        height: 100,
        webpVersion: true,
        width: 100,
        folder: '../../generated'
      }
    ]);

  const items = [
    {
      component: 'jp-input',
      field: '/name',
      options: {
        label: 'Name',
        name: 'name'
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
    quillFiled(col, 'about', 'About')
  ];

  return { col, items, value: {} };
}
