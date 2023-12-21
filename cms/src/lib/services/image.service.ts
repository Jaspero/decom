import type ImageService from '@jaspero/web-components/dist/Types/image.service';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../utils/firebase';
import { random } from '@jaspero/utils';
import type { ImageMetadata } from '../interfaces/image-metadata.interface';

export class BucketImageService implements ImageService {
  acceptedFiles = 'image/png, image/jpeg';
  metadata: ImageMetadata[] = [];
  prefix?: string;

  uploadFile = async (file: any, id: string | undefined) => {
    const src = ref(
      storage,
      [
        this.prefix || '',
        (id || '') + '/',
        `img-${random.string()}.` + file.name.split('.').pop()
      ].join('')
    );
    await uploadBytes(src, file, {
      ...(this.metadata?.length && { customMetadata: this.formatGeneratedImages() })
    });

    const url = await getDownloadURL(src);

    return url.split('?')[0] + '?alt=media';
  };

  formatGeneratedImages() {
    return this.metadata.reduce((acc: { [key: string]: string }, cur, index) => {
      acc[`generate_${index + 1}`] = Object.entries(cur).reduce((generated, [key, value]) => {
        generated += `----${key}:${value}`;
        return generated;
      }, '');
      return acc;
    }, {}) as {
      [key: string]: string;
    };
  }
}
