const db = require("../config/config");

const UpdateDueDateFunction = () => {
  db.query(
    "UPDATE issue_book SET isDueDate = 1 WHERE  return_date < ?",
    [new Date()],
    (err, result) => {
      if (result) {
        console.log("New borrower reach the due date.");
      }

      if (err) return console.log(err);
    }
  );
};

module.exports = BookDueDate = (req, res, next) => {
  db.query(
    "SELECT * FROM issue_book WHERE return_date < ? AND isDueDate != 1 ",
    [new Date()],
    async (err, result) => {
      try {
        if (result.length != 0) {
          UpdateDueDateFunction();
          await next();
        } else return next();
      } catch (error) {
        console.log(error);
      }
    }
  );
};
