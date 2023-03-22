const router = require("express").Router();
const db = require("../../config/config");

router.get("/", async (req, res) => {
  db.query("SELECT * FROM bargraph ", (err, result) => {
    if (err) {
      res.status(409).send({ message: "SOMETHING WENT WRONG " + err });
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
