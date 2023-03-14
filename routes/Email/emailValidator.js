const emailValidator = require("deep-email-validator");

module.exports = ValidateEmail = async (email) => {
  //   [
  //     {
  //       valid: false,
  //       validators: {
  //         regex: { valid: true },
  //         typo: { valid: true },
  //         disposable: { valid: true },
  //         mx: { valid: true },
  //         smtp: { valid: false, reason: "Mailbox not found." },
  //       },
  //       reason: "smtp",
  //     },
  //   ];
  return emailValidator.validate(email);
};
