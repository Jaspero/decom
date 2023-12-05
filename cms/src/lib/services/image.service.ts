import type ImageService from '@jaspero/web-components/dist/Types/image.service';
import { storage } from '$lib/utils/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { random } from '@jaspero/utils';

export default class BucketImageService implements ImageService {
  acceptedFiles = 'image/png, image/jpeg';
  uploadFile = async (file: any) => {
    let url = '';
    const metadata = {};
    const imgRef = ref(storage, `aaaaa${random.string(24)}`);
    try {
      await uploadBytes(imgRef, file, metadata);
      url = await getDownloadURL(imgRef);
    } catch (error) {
      console.log(error);
      return 'error';
    }
    return url;
  };
}
