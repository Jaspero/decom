import type {
  Asset,
  AssetManagerService,
  Folder
} from '@jaspero/web-components/dist/Types/asset-manager.service';
import {
  deleteObject,
  getDownloadURL,
  getMetadata,
  listAll,
  ref,
  uploadBytesResumable,
  type StorageReference
} from 'firebase/storage';
import {writable} from 'svelte/store';
import {storage} from '../utils/firebase';
import {STATIC_ASSETS} from './static-assets.const';

export class AMService implements AssetManagerService {
  async getDownloadUrl(r: StorageReference) {
    const url = await getDownloadURL(r);
    return url.split('?')[0] + `?alt=media`;
  }

  async fetch(path: string) {
    if (path === 'pages/static-assets') {
      return [...STATIC_ASSETS];
    }

    const data = await listAll(ref(storage, path));

    const images = await Promise.all(
      data.items.map((item) => {
        const r = ref(storage, item.fullPath);

        return Promise.all([getMetadata(r), this.getDownloadUrl(r)]);
      })
    );

    const folders = data.prefixes
      .map((prefix) => ({
        name: prefix.name,
        id: `${path}/${prefix.name}`,
        type: 'folder'
      }))
      .sort((a, b) => a.name.localeCompare(b.name)) as Folder[];
    const assets = images
      .map((image) => ({
        id: image[0].fullPath,
        name: image[0].name,
        url: image[1],
        contentType: image[0].contentType,
        type: 'asset',
        size: image[0].size
      }))
      .sort((a, b) => a.name.localeCompare(b.name)) as Asset[];

    if (path === 'pages') {
      folders.unshift({
        name: 'Static Assets',
        id: `pages/static-assets`,
        type: 'folder'
      });
    }

    return [
      ...folders,
      ...assets
    ];
  }

  async upload(p: string, file: File) {
    const path = `${p}/${file.name}`;
    const r = ref(storage, path);

    const uploader = uploadBytesResumable(r, file);

    let currentProgress = 0;
    let curentStatus = 'uploading';

    const item = {
      id: path,
      name: file.name,
      size: file.size,
      path,
      status: writable(curentStatus),
      progress: writable(currentProgress),
      uploader,
      contentType: file.type,
      type: 'file',
      url: ''
    };

    if (item.contentType.split('/')[0] === 'image') {
      item.url = URL.createObjectURL(file);
    }

    uploader.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        if (progress !== currentProgress) {
          currentProgress = progress;
          item.progress.set(progress);
        }

        switch (snapshot.state) {
          case 'paused':
          case 'running':
            if (curentStatus !== snapshot.state) {
              item.status.set(snapshot.state);
              curentStatus = snapshot.state;
            }
            break;
        }
      },
      (error) => {
        // TODO: Error handling
        console.error(`Uploading file ${item.id}`, error);
      },
      async () => {
        item.url = await this.getDownloadUrl(uploader.snapshot.ref);
      }
    );

    return item;
  }

  async remove(id: string) {
    const r = ref(storage, id);
    await deleteObject(r);
  }
}
