import { redirectUnauthorized } from '$lib/guards/redirect-unauthoirzed';

export async function load() {
  await redirectUnauthorized();
}
