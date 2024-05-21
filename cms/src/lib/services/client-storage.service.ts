import Dexie, { type Table } from 'dexie';
import type { Sort } from '../interfaces/sort.interface';

interface DataTableSort {
  url?: string;
  key: string;
  direction: 'asc' | 'desc';
}

interface DataTablePageSize {
  url?: string;
  size: number;
}

class DataTableDatabase extends Dexie {
  public pageSize!: Table<DataTablePageSize, string>;
  public sort!: Table<DataTableSort, string>;

  public constructor() {
    super('DataTableDatabase');
    this.version(1).stores({
      pageSize: 'url,size',
      sort: 'url,key,direction'
    });
  }
}

class ClientStorage {
  private db = new DataTableDatabase();

  private get url() {
    return location.pathname;
  }

  async updateSort(sort: Sort) {
    const item = await this.db.sort.get(this.url);
    if (item) {
      await this.db.sort.update(this.url, { ...sort, url: this.url });
    } else {
      await this.db.sort.add({ ...sort, url: this.url });
    }
  }

  private getSort() {
    return this.db.sort.get(this.url);
  }

  async updatePageSize(size: number) {
    const item = await this.db.pageSize.get(this.url);
    if (item) {
      await this.db.pageSize.update(this.url, { size, url: this.url });
    } else {
      await this.db.pageSize.add({ size, url: this.url });
    }
  }

  private getPageSize() {
    return this.db.pageSize.get(this.url);
  }

  async getByUrl() {
    const data = await Promise.all([this.getPageSize(), this.getSort()]);

    return {
      ...(data[0] && { size: data[0].size }),
      ...(data[1] && { sort: { key: data[1].key, direction: data[1].direction } })
    };
  }
}

export const clientStorage = new ClientStorage();
