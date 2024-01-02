import type { Meta } from '../../meta/meta.interface';
import type { BlogAuthor } from './blog-author.interface';

export interface BlogArticle {
  id: string;
  categoryId: string;
  category: string;
  title: string;
  content: string;
  description?: string;
  meta: Meta;
  status: string;
  author?: BlogAuthor;
  image: string;
  thumb?: string;
  imageAlt: string;
  lastUpdatedOn?: string;
  publicationDate?: string;
}
