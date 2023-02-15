const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  user: process.env.USER1,
  host: process.env.HOST1,
  password: process.env.DBPASSWORD1,
  database: process.env.DATABASE1,
});

module.exports = db;
