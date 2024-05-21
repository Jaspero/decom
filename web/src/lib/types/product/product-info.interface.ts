import type {
  ProductVariantCombinations,
  ProductVariants
} from '$lib/types/product/product-variants.interface';

export interface ProductInfo {
  id: string;
  averageRating: number;
  compareAtPrice: number;
  continueSellingWhenOutOfStock: boolean;
  created: number;
  description: string;
  gallery: string[];
  individualVariantQuantity: boolean;
  name: string;
  physicalProduct: boolean;
  price: number;
  quantity: number;
  shortDescription: string;
  trackQuantity: boolean;
  variantCombinations: ProductVariantCombinations[];
  variants: ProductVariants[];
}
