import { db } from '$lib/utils/firebase';
import { redirect } from '@sveltejs/kit';
import { doc, getDoc } from 'firebase/firestore';
import { BucketImageService } from '$lib/services/image.service';
import { quillFiled } from '$lib/form-fields/quill.field.js';
import { META_FORM_FIELDS } from '$lib/consts/meta.form-fields.js';

export async function load({ params, parent }) {
  await parent();

  const { id } = params;
  const col = 'blog-authors';
  const imageService = new BucketImageService();

  imageService.prefix = col + '/';
  imageService.metadata = [
    {
      filePrefix: 'thumb_',
      height: 100,
      webpVersion: true,
      width: 100,
      folder: '../../generated'
    }
  ];

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
    quillFiled(col, 'about', 'About'),
    ...META_FORM_FIELDS(col)
  ];

  const snap = await getDoc(doc(db, col, id));

  if (!snap.exists) {
    throw redirect(303, '/404');
  }

  const value = { id: snap.id, ...(snap.data() as any) };

  return { snap, col, items, value };
}
