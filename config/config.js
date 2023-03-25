const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
  // connectionLimit: 1000,
  // connectTimeout: 60 * 60 * 1000,
  // acquireTimeout: 60 * 60 * 1000,
  // timeout: 60 * 60 * 1000,
  user: process.env.USER1,
  host: process.env.HOST1,
  password: process.env.DBPASSWORD1,
  database: process.env.DATABASE1,
});

// const connection = mysql.createConnection(process.env.DATABASE_URL);
// console.log("Connected to PlanetScale!");

module.exports = db;
