import { redirect } from '@sveltejs/kit';

export async function load({ parent }) {
  await parent();
  throw redirect(301, '/dashboard/management/admins');
}
