import { redirect } from '@sveltejs/kit';

export async function load({ parent, params }) {
  await parent();
  throw redirect(301, params.id + '/info');
}
