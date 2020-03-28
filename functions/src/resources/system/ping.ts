import * as functions from 'firebase-functions';

export default functions.https.onCall((data, context) => {
  return { response: 'pong'}
});
