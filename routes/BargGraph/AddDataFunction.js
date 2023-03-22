const db = require("../../config/config");

module.exports = AddDataGraph = async (value) => {
  db.query("SELECT D7 FROM bargraph WHERE ID = 1", (err, result) => {
    if (err) return console.log(err);

    db.query(
      "UPDATE bargraph SET D7 = ? WHERE ID = 1",
      [result[0].D7 + value],
      (err, added) => {
        if (err) return console.log(err);
        if (added) return console.log("New data added in bar graph");
      }
    );
  });
};
