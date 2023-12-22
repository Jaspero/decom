import type { Meta } from '../../meta/meta.interface';

export interface BlogAuthor {
  id: string;
  name: string;
  image?: string;
  about?: string;
  meta: Meta;
}
