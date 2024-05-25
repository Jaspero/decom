import { HttpsError, type CallableRequest } from 'firebase-functions/v2/https';

export function isAuthenticated(request: CallableRequest) {
  if (!request.auth?.uid) {
    throw new HttpsError('permission-denied', 'Authentication required');
  }
}

export function hasRole(request: CallableRequest, roles: string[]) {
  isAuthenticated(request);

  if (!roles.includes(request.auth!.token.role)) {
    throw new HttpsError('permission-denied', 'Authentication required');
  }
}
