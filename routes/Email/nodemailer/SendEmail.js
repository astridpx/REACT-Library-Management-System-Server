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
    html: `<p>Click <a href="http://localhost:5000/email-token/${email}/${token}">here</a> to reset your password</p>`,
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
