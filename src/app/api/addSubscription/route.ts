import mailchimp from '@mailchimp/mailchimp_marketing';
import { error } from 'console';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER // e.g. us1
});

export default function Hanler(req, res) {
  if (req.method == 'POST') {
    const reqBody = req.body;
    const reqBodyJson = JSON.parse(reqBody);
    const { email = '' } = reqBodyJson;

    if (!email) {
      res.status(404).json({ error: 'email not found' });
    } else {
      res.status(200).json({ email });
    }
  } else {
    res.send(':(');
  }
}

// export async function POST(request: Request) {
//   try {
//     const { email } = await request.json();
//     console.log('Received email:', email);

//     if (!email) {
//       return new Response(JSON.stringify({ error: 'Email is required' }), {
//         status: 400
//       });
//     }

//     const apiKey = process.env.RESEND_API_KEY;
//     const audienceId = process.env.RESEND_AUDIENCE_ID;

//     if (!apiKey || !audienceId) {
//       throw new Error('RESEND_API_KEY or RESEND_AUDIENCE_ID is not defined');
//     }

//     console.log('Attempting to add subscriber to list:', audienceId);

//     const response = await fetch(
//       `https://api.resend.com/v1/lists/${audienceId}/members`,
//       {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${apiKey}`,
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           email_address: email,
//           status: 'subscribed'
//         })
//       }
//     );

//     if (!response.ok) {
//       const errorResponse = await response.json();
//       console.error('Resend API error response:', errorResponse);
//       throw new Error(errorResponse.detail || 'Subscription failed');
//     }

//     const responseData = await response.json();
//     console.log('Resend response:', responseData);

//     return new Response(JSON.stringify({ res: responseData }), { status: 200 });
//   } catch (error: any) {
//     console.error('Error subscribing user:', error);

//     let errorMessage = 'Subscription failed';
//     if (error instanceof Error) {
//       errorMessage = error.message;
//     }

//     return new Response(JSON.stringify({ error: errorMessage }), {
//       status: 500
//     });
//   }
// }
