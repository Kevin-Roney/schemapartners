// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail');
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
    to: 'katrina@katmariee.com',
    from: 'katrina@katmariee.com',
    subject: `New Website Inquiry from ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br />'),
  };

  await mail.send(data);
  res.status(200).json({ status: 'OK' });
}
