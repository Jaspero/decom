import admin from "firebase-admin";
const type = "service_account";
const project_id = "jp-decom";
const private_key_id = "6857032ab67740677f6be0f216108814c602436b";
const private_key = "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0ktIeEyzb7zFi\nWBRyzKEl/FaIahIdw/B97++uAjOTS8k5cAgKJva4ERMSVR9qu3LUTLrVh2Naz9Su\nz6wM1Y/L6Xa8F8HGQi8AOGxNndo+h4R+BFglnmq8/ZBO+qhCPUDsQcEmDxuYjE/L\nxuknLUVQmZNTkljaj/gcdSOWF0rUIc2jiUAS1AeKdGd6zkC/ltlCG3JE/vJ1v7Mf\n6MvR7yRnMQBom7+UdWW9OO6W1EzfRh9zShSSi4ZdNSt8ka54fHQxy/bABXXwjz9t\nzF8hkBSTK+RejBKnc3k+DH/6ffZAB9eyK/KHTZwiYa8i94iNsGR4bw3r61gDstWv\nC4nfWh8LAgMBAAECggEABTjMSk+lN8/aVWPL95Yy5M/SOIL3CQKb7AKzNZ7vrVBs\n0KHn+HhUsyyxhEhqnD1552lcWPLftgY6cRZJ6xKGP9AiNGGQ7J+/fOwSgJKt0s7z\nKrMwLRgJeypdJ8OKnIl77zkeJALU1a4mNyqYw1WgmU8Gft+OxmK133VgB0p6t7Rm\nUBRmj4J50saRDwEH/yHiXGlu3uMoWgKxLx4nwYiN9Nd0qtIGCvpLzQfwLFQ4rlz7\nyr/d0rcEA11XbYZVNq0rpWBpFgaBX3lTMKFvC/H2+Kj0l2NvUWGLqHC9Ak4JR2Gt\nvDScuoiz+SZ6X9iH9M4evfOTkMmLcfrltmOPUIi3QQKBgQDxm4Bo9C36Ue0ORs9F\nACzdwQhZJd+lFMjTYNfrsOADgU/P/Rm61XJqmJDyt/gsm/2dGLu+8sUVvOjoCqtA\nTAwjHqp/maqGfERPQr7uKiYBU3tvyC38AA4Z7jBLu+UBscOND6Sz07AfYw1xOa0V\n00ZFLXprLeSoUncBEBr1YIcwwQKBgQC/VI5Jg19j6n0CLMu9qF7ZYGT79aPgiDyn\nVEBVY56rJ1sL+EBwEwgzpeb9MeN8glAjrnS/MfXA754PtYxUqXzObfZhge9NZL3l\nQwp5fh+NiNph16eK5K55AefgM5KsLNflTdsH0j+RtEJjl7ePLKQN5ZNqoGQIIDiG\nK4Ix0Y32ywKBgBSo214eIyBYiRDDdU3NKgj8TJ5y4qDXGiUZDt2UjlM+Z3i9h8m2\nHsaGrT5UBOCrphAc4VD+qWOmd7P/1Yz188O9B49JsI83aQ/uAS2UZROP8+onD+eQ\niaQl/fM76eUvMi2JvOeznkfQzIF2ERrgqg2YSfOIRRkvlAV/Pw7kZisBAoGBAJ/a\nYoLy+ui8yjLeAF9148EUM2r7YS7ARIS89H8jGzb+S6hlgljg3dJhAut6Ggk1ywT0\nxd/UOvI2gMW5NgSqEndaEiaHa8sqpyl76K12/Z+/vk1O41E9HLRHLlb4X8vwL3UK\npjwToj727xzMbnV1o59kttS4KrtLSE543W8IGOcfAoGARXXz3siG4025KJZyJBKF\nykkv4ouoQNLMYr7wgkK/ilYi1Hw+kqHA/NqaP+fZMT5NIf8eg9q2mVLXHcQJrOx/\nnkNzafBJVYptkjUTy1luyPR9A7As7okJLiTE7AwaD9robUOLEfYLIvWs7INCDzxp\nj33dJAOwnkjU6KMROCt/yHU=\n-----END PRIVATE KEY-----\n";
const client_email = "firebase-adminsdk-mnhb9@jp-decom.iam.gserviceaccount.com";
const client_id = "105435111706232809080";
const auth_uri = "https://accounts.google.com/o/oauth2/auth";
const token_uri = "https://oauth2.googleapis.com/token";
const auth_provider_x509_cert_url = "https://www.googleapis.com/oauth2/v1/certs";
const client_x509_cert_url = "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-mnhb9%40jp-decom.iam.gserviceaccount.com";
const universe_domain = "googleapis.com";
const credential = {
  type,
  project_id,
  private_key_id,
  private_key,
  client_email,
  client_id,
  auth_uri,
  token_uri,
  auth_provider_x509_cert_url,
  client_x509_cert_url,
  universe_domain
};
const app = admin.initializeApp(
  { credential: admin.credential.cert(credential) },
  "app-" + Date.now()
);
const firestore = app.firestore();
export {
  firestore as f
};
