import type { PageServerLoad } from '../../../../.svelte-kit/types/src/routes/blog/$types';
import { productData } from '$lib/server/product';

export const csr = true;
export const prerender = false;


export const load: PageServerLoad = async () => {
  const productInfo = await productData('ji0EtATBMbp05IjuKej5');

  return {
    productInfo
  }
};
