import { redirectAuthorized } from '$lib/guards/redirect-authorized';

export async function load() {
  await redirectAuthorized();
}
