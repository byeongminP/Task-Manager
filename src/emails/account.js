const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: 'byeongmin@berkeley.edu',
      subject: 'Thank you for joining in!',
      text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
  } catch (e) {
    console.log(e);
  }
};

const sendCancellationEmail = async (email, name) => {
  try {
    await sgMail.send({
      to: email,
      from: 'byeongmin@berkeley.edu',
      subject: 'Sorry to see you go!',
      text: `Goodbye, ${name}. Hope to see you soon.`
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail,
}