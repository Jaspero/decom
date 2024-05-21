import type { Meta } from '../../meta/meta.interface';
import type { BlogAuthor } from './blog-author.interface';

export interface BlogArticle {
  id: string;
  compareToPrice: number;
  continueSellingWhenOutOfStock: boolean;
  created: number;
  description: string;
  individualVariantQuantity: boolean;
  name: string;
  physicalProduct: boolean;
  price: number;
  quantity: number;
  shortDescription: string;
  trackQuantity: boolean;
  variantCombinations: {
    price?: number;
    quantity?: number;
    variant: string;
  }[];
  variants: {
    name?: string;
    options?: string[];
  }[];
}
