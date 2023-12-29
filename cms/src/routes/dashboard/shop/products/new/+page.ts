import {PRODUCT_FORM} from '../_product-form.const';

export async function load({ parent }) {
  await parent();

  const col = 'products';
  const items = await PRODUCT_FORM(true);

  return { col, items, value: {} };
}
