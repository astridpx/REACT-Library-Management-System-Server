const router = require("express").Router();
const jwt = require("jsonwebtoken");

router.post("/:token", async (req, res) => {
  const token = req.params.token;

  jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
    try {
      if (err) {
        return res.json({ isValid: false });
        console.log(err);
      } else {
        return res.json({ isValid: true });
      }
    } catch (error) {
      console.log(err);
      throw error;
    }
  });
});

module.exports = router;
