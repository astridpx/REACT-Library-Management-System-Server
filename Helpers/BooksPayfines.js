const db = require("../config/config");

const SetPayfines = (ID, fines) => {
  db.query(
    "UPDATE issue_book SET payfines = ? WHERE ISSUE_ID = ?",
    [fines, ID],
    (err, result) => {
      if (err) return console.log(err);
    }
  );
};

module.exports = BooksPayfines = () => {
  db.query(
    "SELECT * FROM issue_book WHERE isDueDate = 1",
    async (err, result) => {
      if (err) return err;

      await result.map((data) => {
        const dayMs = 86400000;
        const dayMsDiff = new Date() - data.return_date;
        const payfineDays = Math.floor(dayMsDiff / dayMs);
        const payfines = payfineDays * 20;

        // SET FINES
        SetPayfines(data.ISSUE_ID, payfines);
      });
    }
  );
};
