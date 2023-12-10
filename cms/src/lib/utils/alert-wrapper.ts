import { renderAlert } from '@jaspero/web-components/dist/render-alert.js';
import { FirebaseError } from 'firebase/app';

const firebaseErrors: { [key: string]: string } = {
  'auth/wrong-password':
    'The email and password you entered did not match our records. Please double-check and try again.',
  'auth/too-many-requests':
    'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.',
  'auth/user-not-found': 'There is no user record corresponding to this identifier.',
  'auth/weak-password': 'Please provide a stronger password.',
  'auth/missing-email': 'The provided email address is not valid.',
  'auth/user-token-expired': `This is a sensitive action. Please login again to perform it.`,
  'auth/invalid-login-credentials':
    'The email and password you entered did not match our records. Please double-check and try again.',
  'auth/invalid-verification-code': 'The code you entered is invalid. Please try again.',
  'auth/code-expired': 'The code you entered has expired. Please try again.',
  'auth/missing-code': 'Please enter the code you received via SMS.',
  'auth/invalid-phone-number': 'Please enter a valid phone number.',
  'auth/unverified-email': 'Please verify your email first.',
  'auth/requires-recent-login': 'This action requires you to login again.'
};

export async function alertWrapper(
  request: Promise<any>,
  successMessage = '',
  errorMessage: string | boolean | ((e: any) => string) = (e) => e.message,
  onError?: (error: any) => void | Promise<void>
) {
  let resp;

  try {
    resp = await request;
    if (successMessage) {
      renderAlert({ title: 'Success', message: successMessage, state: 'success' });
    }
  } catch (e: any) {
    if ((errorMessage as any) !== false) {
      const content = {
        title: 'Something went wrong',
        state: 'error',
        message: typeof errorMessage === 'function' ? errorMessage(e) : errorMessage || e.toString()
      };

      if (e instanceof FirebaseError) {
        content.message = firebaseErrors[e.code] || '';
      }

      if (e.code !== 'auth/multi-factor-auth-required' && e.code !== 'auth/unverified-email') {
        renderAlert(content as any);
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
