const router = require("express").Router();
const db = require("../../config/config");
const jwt = require("jsonwebtoken");

// This will update isVerify to valid the student email after visiting the url
router.get("/:email/:token", async (req, res) => {
  jwt.verify(req.params.token, process.env.EMAIL_TOKEN_KEY, (err, decoded) => {
    if (err) return res.render("../pages/invalidToken");

    db.query(
      "UPDATE `student_acc` SET `isVerify` = '1' WHERE `student_acc`.`email` = ?",
      [req.params.email],
      (err, result) => {
        if (err) return console.log(err);

        return res.render("../pages/validToken");
      }
    );
  });
});

module.exports = router;
