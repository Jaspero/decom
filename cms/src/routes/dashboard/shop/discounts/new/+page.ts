import { DISCOUNT_FORM } from '../_discount-form.const.js';

export async function load({ parent }) {
  await parent();

  const col = 'discounts';
  const items = DISCOUNT_FORM;

  return { col, items, value: {} };
}
