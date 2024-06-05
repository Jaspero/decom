// @ts-nocheck
import { blogData } from '$lib/server/blog';
import type { PageServerLoad } from './$types';

export const load = async () => {
  const { authors } = await blogData();

  return {
    authors
  };
};
;null as any as PageServerLoad;