import {ENV_CONFIG} from '../consts/env-config';

export function getThumb(url: string, thumb: string) {
  const temp = url.split('%2F');
  const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${ENV_CONFIG.firebase.storageBucket}/o/`;

  return (
    baseUrl +
    'generated%2F' +
    thumb +
    (temp.length > 1 ? temp[temp.length - 1] : url.split(baseUrl)[1])
  );
}
