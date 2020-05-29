import * as sgMail from '@sendgrid/mail';
import * as functions from 'firebase-functions';

// const cors = require('cors')({
//   origin: true,
// });
// export default functions.https.onRequest((req, res) => {
//   cors(req, res, async () => {
//     const to = req.to;
//     console.log('TEST');
//     res.header(
//       'Access-Control-Allow-Methods',
//       'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//     );
//     res.header('Access-Control-Allow-Headers', '*');
//     const apiKey =
//       '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';
//     sgMail.setApiKey(apiKey);
//     const msg: sgMail.MailDataRequired = {
//       to: ['jacques@86degrees.com'],
//       from: 'hello@coronafighter.io',
//       subject: 'TEST MEAIL',
//       text: 'THIS IS A TEST',
//     };
//     try {
//       await sgMail.send(msg);
//     } catch (error) {
//       console.error(error);
//       if (error.response) {
//         // Extract error msg
//         const { response } = error;

//         // Extract response msg
//         const { body } = response;

//         console.error(body);
//       }
//     }
//     res.status(200).send({ data: { message: 'sent' } });
//   });
// });

// Saves a message to the Firebase Realtime Database but sanitizes the text by removing swearwords.
export default functions.https.onCall(async (data, context) => {
  const to = data.to;
  const subject = data.subject;
  const body = data.body;
  console.log('TEST 2');
  console.log(to, subject, body);
  const apiKey =
    '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';
  sgMail.setApiKey(apiKey);
  const msg: sgMail.MailDataRequired = {
    to: to,
    from: 'hello@coronafighter.io',
    subject: subject,
    text: body,
  };
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);
    if (error.response) {
      // Extract error msg
      const { response } = error;

      // Extract response msg
      const { body } = response;

      console.error(body);
    }
  }
  return { data: { message: 'sent' } };
});
