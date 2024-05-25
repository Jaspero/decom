import { onRequest } from 'firebase-functions/v2/https';
import { REGION } from '../shared/consts/region.const';
import { unescape } from 'querystring';

export const actioncontroller = onRequest(
  {
    region: REGION,
    maxInstances: 10
  },
  (request, response) => {
    response.redirect(
      unescape(request.query.continueUrl as string) +
        '?' +
        Object.entries(request.query)
          .map(([key, value]) => `${key}=${value}`)
          .join('&')
    );
  }
);
