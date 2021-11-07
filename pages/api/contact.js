// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');
const toEmail = process.env.TO_EMAIL_ADDRESS;
const fromEmail = process.env.FROM_EMAIL_ADDRESS;
mail.setApiKey(process.env.SENDGRID_API_KEY);

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

  await mail.send(data);
  res.status(200).json({ status: 'OK' });
}
