import type { Collection } from './collection.interface';

class Collections {
  collections: { [key: string]: Collection } = {};

  addCollection(id: string, data: Collection) {
    this.collections[id] = {
      add: true,
      ...data
    };
  }

  getCollection(id: string) {
    return this.collections[id];
  }
}

export const collections = new Collections();
