import type { PageServerLoad } from './$types';
import { productData } from '$lib/server/product';


export const load: PageServerLoad = async ({ params }) => {
  const { product } = await productData(params?.id);
  return {
      productInfo: { product }
  };
};
