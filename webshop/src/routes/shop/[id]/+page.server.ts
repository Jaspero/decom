import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/blog/$types';
import { productData } from '$lib/server/product';

export const csr = true;
export const prerender = false;


export const load: PageServerLoad = async ({params}) => {
  const productInfo = await productData(params?.id);
  return {
    productInfo
  }
};
