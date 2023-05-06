const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../config/config");

router.post("/login", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM system_admin WHERE email=?",
    [email],
    (err, result) => {
      if (err) console.log(err);

      if (result.length > 0) {
        const userEmail = result[0].email;
        const role = result[0].role;

        bcrypt.compare(password, result[0].password).then((match) => {
          if (!match) {
            res.status(409).send({ message: "PASSWORD IS INCORRECT." });
          } else {
            const token = jwt.sign(
              { id: result[0].id },
              process.env.JWTPRIVATEKEY,
              {
                expiresIn: "10h",
              }
            );
            // req.session.user = result;
            // console.log(req.session.user);
            res.status(200).send({
              message: "LOGIN SUCCESS.",
              email: userEmail,
              role: role,
              token,
            });
          }
        });
      } else {
        res.status(409).send({ message: "INVALID EMAIL." });
      }
    }
  );
});

module.exports = router;
