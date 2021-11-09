// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');
const toEmail = process.env.NEXT_PUBLIC_TO_EMAIL_ADDRESS;
const fromEmail = process.env.NEXT_PUBLIC_FROM_EMAIL_ADDRESS;
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  const message = `
  Name: ${body.name}\r\n
  Email: ${body.email}\r\n
  Industry: ${body.industry}\r\n
  Message: ${body.message}
`;

  const data = {
    to: toEmail,
    from: fromEmail,
    subject: `New Website Inquiry from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  try {
    await mail.send(data);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  res.status(200).json({ status: 'OK' });
}
