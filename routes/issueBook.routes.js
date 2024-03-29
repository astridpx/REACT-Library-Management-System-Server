const router = require("express").Router();
const db = require("../config/config");
const AddDataFunction = require("../routes/BargGraph/AddDataFunction");

// ISSUE BOOK
router.post("/issue", async (req, res) => {
  const today = new Date();
  const isbn = req.body.isbn;
  const title = req.body.title;
  const name = req.body.name;
  const email = req.body.email;
  const issueDate = today;
  const returnDate = req.body.returnDate;

  db.query("SELECT * FROM booklist WHERE isbn=?", [isbn], (err, isbnResult) => {
    if (isbnResult.length < 1)
      return res
        .status(409)
        .send({ message: "ISBN NOT FOUND IN THE BOOKLIST." });

    db.query(
      "SELECT * from student_acc WHERE email=?",
      [email],
      (err, emailResult) => {
        if (emailResult.length < 1)
          return res.status(409).send({ message: "EMAIL NOT FOUND." });

        if (emailResult[0].role === "applicants")
          return res
            .status(409)
            .send({ message: "This Account is not accepted yet." });

        db.query(
          "SELECT * FROM issue_book WHERE BOOK_ID=?",
          [isbnResult[0].BOOK_ID],
          (err, result) => {
            if (result.length > 0) {
              return res.status(409).send({
                message: "SORRY THIS BOOK CURRENTLY IN SOMEONE PREVILAGE.",
              });
            }

            db.query(
              "SELECT * FROM issue_book WHERE STUD_ID=?",
              [emailResult[0].STUD_ID],
              (err, StudIdresult) => {
                if (StudIdresult.length >= 3)
                  return res
                    .status(409)
                    .send({ message: "You can't borrow books more than 3" });

                db.query(
                  "INSERT INTO issue_book (BOOK_ID, STUD_ID, issue_date, return_date) VALUES(?, ?, ?, ?)",
                  [
                    isbnResult[0].BOOK_ID,
                    emailResult[0].STUD_ID,
                    issueDate,
                    returnDate,
                  ],
                  (err, result) => {
                    if (result) {
                      res.status(200).send({ message: "ISSUE BOOK SUCCESS." });
                      AddDataFunction(1);
                    }
                  }
                );
              }
            );
          }
        );
      }
    );
  });
});

// ISSUE BOOK SCAN
router.get("/issue/getBook/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  db.query("SELECT * FROM booklist WHERE isbn=?", [isbn], (err, result) => {
    if (result.length > 0) {
      res.json(result);
    } else {
      res.status(409).send({ message: "ISBN NOT FOUND IN THE BOOKLIST." });
    }
  });
});

module.exports = router;
// SELECT * FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID;
