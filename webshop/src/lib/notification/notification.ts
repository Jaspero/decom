import { FirebaseError } from 'firebase/app';
import { writable } from 'svelte/store';

export const firebaseErrors: { [key: string]: string } = {
  'auth/wrong-password':
    'The email and password you entered did not match our records. Please double-check and try again.',
  'auth/too-many-requests':
    'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
  'auth/user-not-found': 'There is no user record corresponding to this identifier.',
  'auth/weak-password': 'Password must be at least 6 characters long',
  'auth/missing-email': 'The provided email address is not valid.',
  'auth/user-token-expired': `This is a sensitive action. Please login again to perform it.`,
  'auth/invalid-login-credentials':
    'The email and password you entered did not match our records. Please double-check and try again.',
  'auth/invalid-verification-code': 'The code you entered is invalid. Please try again.',
  'auth/code-expired': 'The code you entered has expired. Please try again.',
  'auth/missing-code': 'Please enter the code you received via SMS.',
  'auth/invalid-phone-number': 'Please enter a valid phone number.',
  'auth/unverified-email': 'Please verify your email first.',
  'auth/requires-recent-login': 'This action requires you to login again.',
  'auth/email-already-in-use': 'The email address is already in use',
};

export interface Notification {
  type?: 'error' | 'success';
  duration?: number;
  title?: string;
  content: string;
  click?: () => any;
  action?: string;
}

export const notification = writable<null | Notification>(null);

export async function notificationWrapper(
  request: Promise<any>,
  successMessage = '',
  errorMessage: string | boolean | ((e: any) => string) = (e) => e.message,
  onError?: (e: any) => any
) {
  let resp;

  try {
    resp = await request;
    if (successMessage) {
      notification.set({ content: successMessage });
    }
  } catch (e: any) {
    if ((errorMessage as any) !== false) {
      const content = {
        type: 'error',
        content: typeof errorMessage === 'function' ? errorMessage(e) : errorMessage || e.toString()
      };

      if (e instanceof FirebaseError) {
        content.content = firebaseErrors[e.code] || '';
      }

      if (e.code !== 'auth/multi-factor-auth-required' && e.code !== 'auth/unverified-email') {
        notification.set(content as any);
      }
    }

    console.error(e);

    if (onError) {
      await onError(e);
    }

    throw e;
  }

  return resp;
}
