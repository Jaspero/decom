export interface ProductVariants {
  name: string;
  options: string[];
}

export interface ProductVariantCombinations {
  price: number;
  quantity: number;
  variant: string;
}
