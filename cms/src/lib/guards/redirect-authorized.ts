import { redirect } from '@sveltejs/kit';
import { authenticated } from '../utils/firebase';

export async function redirectAuthorized(path = '/dashboard') {
  const user = await new Promise((resolve) => {
    const unsub = authenticated.subscribe((data) => {
      if (data === null) {
        return;
      }

      try {
        unsub();
      } catch {}
      resolve(data);
    });
  });

  if (user) {
    throw redirect(301, path);
  }

  return user;
}
