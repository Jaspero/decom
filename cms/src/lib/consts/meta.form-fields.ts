import { BucketImageService } from '../services/image.service';

export const META_FORM_FIELDS = (collection: string) => {
  const imageService = new BucketImageService();

  imageService.prefix = collection + '/';

  return [
    {
      component: 'jp-input',
      field: '/meta/title',
      id: 'meta.title',
      options: {
        label: 'Meta Title'
      }
    },
    {
      component: 'jp-input',
      field: '/meta/keywords',
      options: {
        label: 'Meta Keywords'
      }
    },
    {
      component: 'jp-textarea',
      field: '/meta/description',
      options: {
        label: 'Meta Description'
      }
    },
    {
      component: 'jp-textarea',
      field: '/meta/structured',
      options: {
        label: 'Meta Structured Data'
      }
    },
    {
      component: 'jp-file-upload',
      field: '/meta/og/image',
      options: {
        name: 'ogImage',
        label: 'Open Graph Image',
        service: imageService
      }
    }
  ];
};
