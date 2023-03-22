const moment = require("moment");
const db = require("../../config/config");

module.exports = BarGraphRefresh = () => {
  db.query("SELECT * FROM bargraph", async (err, result) => {
    const day = await result.map((data) => {
      return data;
    });

    if (
      moment(day[0].past_date).format("YY-MM-DD") < moment().format("YY-MM-DD")
    ) {
      console.log("BarGraph Refreshing..");

      db.query(
        "UPDATE bargraph SET  ? WHERE ID = 1",
        [
          {
            D1: day[0].D2,
            D2: day[0].D3,
            D3: day[0].D4,
            D4: day[0].D5,
            D5: day[0].D6,
            D6: day[0].D7,
            D7: 0,
            past_date: moment().format("YY-MM-DD"),
          },
        ],
        async (err, refresh) => {
          if (refresh) return console.log("The Graph DB is Refresh");
          if (err) console.log(err);
        }
      );
    }
  });
};
