import { redirectUnauthorized } from '$lib/guards/redirect-unauthoirzed';
import { collections } from '$lib/collections/collections';
import '$lib/collections/data.ts';

export async function load() {
  await redirectUnauthorized();
}
