import {FORM_FIELDS} from '../form-fields.const.js';

export async function load({ parent }) {
  await parent();

  return { col: 'landing-page-forms', items: FORM_FIELDS, value: {} };
}
