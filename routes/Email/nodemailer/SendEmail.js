const nodemailer = require("nodemailer");

const MessageMailer = async function (email, token) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  let details = {
    from: "styles132001@gmail.com",
    to: email,
    subject: "SVCC Library",
    html: `<p>Click <a href="${process.env.EMAIL_TOKEN_URL}/email-token/${email}/${token}" target="_blank">here</a> to confirm your account</p>`,
  };

  transporter.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Email successfully sent to ${email}.`);
    }
  });
};

module.exports = MessageMailer;
