import { BucketImageService } from '../services/image.service';

export const quillFiled = (collection: string, id: string, label: string) => {
  const quillService = new BucketImageService();
  quillService.prefix = collection + '/';
  quillService.metadata = [
    {
      folder: collection + '/',
      width: 1080
    }
  ];

  return {
    component: 'jp-ckeditor',
    field: '/' + id,
    options: {
      label: label,
      name: id,
      service: quillService
    }
  };
};
