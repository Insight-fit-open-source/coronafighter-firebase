import * as functions from 'firebase-functions';

export default functions.https.onRequest((req, res) => {
  return res
    .status(200)
    .send({ response: 'pong' })
});
