module.exports = {
  reactStrictMode: true,
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    TO_EMAIL_ADDRESS: process.env.TO_EMAIL_ADDRESS,
    FROM_EMAIL_ADDRESS: process.env.FROM_EMAIL_ADDRESS,
  },
}
