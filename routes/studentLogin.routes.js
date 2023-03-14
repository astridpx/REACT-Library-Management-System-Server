const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/config");
const MessageMailer = require("./Email/nodemailer/SendEmail");

require("dotenv").config();

router.post("/", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  //  GEnerate token for email confirmation
  const emailToken = jwt.sign({ email: email }, process.env.EMAIL_TOKEN_KEY, {
    expiresIn: "3m",
  });

  db.query(
    "SELECT * FROM student_acc WHERE email=?",
    [email],
    (err, result) => {
      if (err) console.log(err);

      if (result.length === 0)
        return res.status(409).send({ message: "NO EMAIL FOUND." });

      bcrypt.compare(password, result[0].password).then((match) => {
        if (!match)
          return res.status(409).send({ message: "PASSWORD IS INCORRECT." });

        if (!result[0].isVerify) {
          return MessageMailer(email, emailToken).then(() =>
            res.status(409).send({
              message: "We sent an email verification. Pls confirm your email.",
            })
          );
        }

        if (result[0].role === "student") {
          const token = jwt.sign(
            { id: result[0].id },
            process.env.JWTPRIVATEKEY,
            {
              expiresIn: "10h",
            }
          );
          const role = result[0].role;
          const id = result[0].STUD_ID;
          res.status(200).send({ message: "LOGIN SUCCESS.", token, role, id });
        } else {
          res.status(409).send({
            message:
              "Your Account is not confirmed yet. Pls, Contact Your admin to make this account login.",
          });
        }
      });
    }
  );
});

module.exports = router;
