const router = require("express").Router();
const db = require("../config/config");
const { authStudent } = require("../authorization");
const bcrypt = require("bcrypt");

// authStudent(["admin", "student"]),
// GET ISSUE RECORDS
router.get("/", async (req, res) => {
  db.query(
    // "SELECT * FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID;",
    "SELECT ib.ISSUE_ID, ib.issue_date,ib.return_date,ib.isDueDate, bk.BOOK_ID, bk.isbn, bk.title, sa.STUD_ID, sa.stud_no, sa.name, sa.email, sa.course  FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID;",
    (err, result) => {
      res.json(result);
    }
  );
});

router.get("/:course", async (req, res) => {
  db.query(
    // "SELECT * FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID;",
    "SELECT ib.ISSUE_ID, ib.issue_date,ib.return_date,ib.isDueDate, bk.BOOK_ID, bk.isbn, bk.title, sa.STUD_ID, sa.stud_no, sa.name, sa.email, sa.course FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID WHERE sa.course = ?;",
    [req.params.course],
    (err, result) => {
      res.json(result);
    }
  );
});

// Get  ALL Record of reach the due date
router.get("/expire/records", async (req, res) => {
  db.query(
    // "SELECT * FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID;",
    "SELECT ib.ISSUE_ID,ib.payfines, ib.issue_date,ib.return_date,ib.isDueDate, bk.BOOK_ID, bk.isbn, bk.title, sa.STUD_ID, sa.stud_no, sa.name, sa.email FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID WHERE ib.isDueDate = 1;",
   async (err, result) => {
     await res.json(result);
    }
  );
});

// DELETE RECORD ON ISSUE
router.delete("/delete/:id", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM admin WHERE email=?", [email], (err, result) => {
    if (result.length > 0) {
      bcrypt.compare(password, result[0].password).then((match) => {
        if (!match) {
          res.status(409).send({ message: "Invalid Password." });
        } else {
          db.query(
            "DELETE FROM issue_book WHERE issue_book.ISSUE_ID = ?",
            [req.params.id],
            (err, result) => {
              if (result) {
                res
                  .status(201)
                  .send({ message: "RECORD DELETED SUCCESSFULLY." });
              }
            }
          );
        }
      });
    } else {
      res.status(409).send({ message: "Email Doesn't Exist." });
    }
  });
});

// RETURN GET DATA FROM SCANNER
router.get("/return/data-scan/:isbn", async (req, res) => {
  // console.log(req.params.isbn);
  db.query(
    "SELECT * FROM booklist WHERE isbn=?",
    [req.params.isbn],
    (err, result) => {
      if (result.length > 0) {
        // res.json(result);
        db.query(
          "SELECT * FROM issue_book WHERE issue_book.BOOK_ID =?",
          [result[0].BOOK_ID],
          (err, exist) => {
            if (exist.length > 0) {
              db.query(
                // "SELECT * FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID;",
                "SELECT ib.ISSUE_ID, ib.issue_date,ib.return_date, bk.BOOK_ID, bk.isbn, bk.title, sa.STUD_ID, sa.stud_no, sa.name, sa.email FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID WHERE ib.BOOK_ID=?",
                [result[0].BOOK_ID],
                (err, results) => {
                  // console.log(results);
                  res.json(results);
                }
              );
            } else {
              res
                .status(404)
                .send({ message: "ISBN DOESN'T EXIST IN THE ISSUE RECORD." });
            }
          }
        );
      } else {
        res.status(404).send({ message: "ISBN NOT FOUND." });
      }
    }
  );
});

// RETURN DELETE
router.delete("/return", async (req, res) => {
  const isbn = req.body.isbn;
  // console.log(isbn);
  db.query("SELECT * FROM booklist WHERE isbn=?", [isbn], (err, result) => {
    if (result.length > 0) {
      // res.json(result);

      db.query(
        "SELECT * FROM issue_book WHERE issue_book.BOOK_ID =?",
        [result[0].BOOK_ID],
        (err, exist) => {
          if (exist.length > 0) {
            db.query(
              "DELETE FROM issue_book WHERE issue_book.BOOK_ID = ?",
              [result[0].BOOK_ID],
              (err, results) => {
                if (results) {
                  res
                    .status(201)
                    .send({ message: "RECORD DELETED SUCCESSFULLY." });
                }
              }
            );
          } else {
            res
              .status(404)
              .send({ message: "ISBN DOESN'T EXIST IN THE ISSUE RECORD." });
          }
        }
      );
    } else {
      res.status(404).send({ message: "Isbn not found." });
    }
  });
});

// SEARCH FILTER ALL RECCORDS
router.get("/:search", async (req, res) => {
  const searchValue = req.params.search;
  db.query(
    // "SELECT * FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID;",
    'SELECT ib.ISSUE_ID, ib.issue_date,ib.return_date,ib.isDueDate, bk.BOOK_ID, bk.isbn, bk.title, sa.STUD_ID, sa.stud_no, sa.name, sa.email FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID WHERE CONCAT(ib.ISSUE_ID, ib.issue_date,ib.return_date, bk.BOOK_ID, bk.isbn, bk.title, sa.STUD_ID, sa.stud_no, sa.name, sa.email)  LIKE "%' +
      searchValue +
      '%"',
    (err, result) => {
      if (result) {
        if (result.length === 0) return res.json("No keyword match.");
        else return res.json(result);
      } else {
        res.status(409).send({ message: "SOMETHING WENT WRONG " + err });
      }
    }
  );
});
// SEARCH FILTER FOR ALL EXPIRE RECORDS
router.get("/expire-records/:search", async (req, res) => {
  const searchValue = req.params.search;
  db.query(
    // "SELECT * FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID;",
    'SELECT ib.ISSUE_ID, ib.issue_date,ib.return_date,ib.isDueDate,ib.payfines, bk.BOOK_ID, bk.isbn, bk.title, sa.STUD_ID, sa.stud_no, sa.name, sa.email FROM issue_book ib LEFT JOIN booklist bk ON bk.BOOK_ID = ib.BOOK_ID LEFT JOIN student_acc sa ON sa.STUD_ID = ib.STUD_ID WHERE ib.isDueDate = 1 AND CONCAT(ib.ISSUE_ID, ib.issue_date,ib.return_date, bk.BOOK_ID, bk.isbn, bk.title, sa.STUD_ID, sa.stud_no, sa.name, sa.email)  LIKE "%' +
      searchValue +
      '%"',
    (err, result) => {
      if (result) {
        if (result.length === 0) return res.json("No keyword match.");
        else return res.json(result);
      } else {
        res.status(409).send({ message: "SOMETHING WENT WRONG " + err });
      }
    }
  );
});

module.exports = router;
