import type { BlogAuthor } from './blog-author.interface';

export interface BlogArticle {
  id: string;
  categoryId: string;
  category: string;
  title: string;
  content: string;
  description?: string;
  meta: any;
  status: string;
  author?: BlogAuthor;
  image: string;
  imageAlt: string;
}
