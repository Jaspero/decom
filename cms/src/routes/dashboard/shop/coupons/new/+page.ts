import { COUPON_FORM } from '../_coupon-form.const.js';

export async function load({ parent }) {
  await parent();

  const col = 'coupons';
  const items = COUPON_FORM;

  return { col, items, value: {} };
}
