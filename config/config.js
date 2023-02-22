const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createPool({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.DBPASSWORD,
  database: process.env.DATABASE,
});

// const connection = mysql.createConnection(process.env.DATABASE_URL);
// console.log("Connected to PlanetScale!");

module.exports = db;
