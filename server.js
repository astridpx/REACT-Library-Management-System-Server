const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const moment = require("moment");

// router
const adminRouter = require("./routes/admin.routes");
const bookRoutes = require("./routes/book.routes");
const studentRoutes = require("./routes/studentManage.routes");
const studentLoginRoutes = require("./routes/studentLogin.routes");
const issueBookRouter = require("./routes/issueBook.routes");
const allRecordsRouter = require("./routes/allRecords.routes");
const profileImgRoutes = require("./routes/profile-Images.routes");
const studentRecord = require("./routes/student.routes");

// TOKEN ROUTES
const TokenVeifyRoutes = require("./routes/token Verification/tokenVerify.routes");
const EmailTokenRoutes = require("./routes/Email/EmailToken.routes");
// db config
const db = require("./config/config");

// middleware
app.use(express.json());
app.set("view engine", "ejs");
// app.use(cors());
app.use(
  cors({
    // origin: ["http://localhost:5000"],
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is Up and Running at port ${port}`);
});

db.getConnection((err, conn) => {
  try {
    if (!err) {
      console.log("MySQL connection stablished...");
    }
  } catch (error) {
    console.log(err);
    throw error;
  }
});

// db.connect((err) => {
//   if (!err) {
//     console.log("MySQL connection stablished...");
//   }
// });

// const Logger = (req, res, next) => {
//   console.log(
//     `${req.protocol}://${req.get("host")}${
//       req.originalUrl
//     } : ${moment().format()}`
//   );
//   next();
// };

// app.use(Logger);
app.use("/admin", adminRouter);
app.use("/token", TokenVeifyRoutes);
app.use("/email-token", EmailTokenRoutes);
app.use("/books", bookRoutes);
app.use("/students", studentRoutes);
app.use("/students/login", studentLoginRoutes);
app.use("/students", studentRecord);
app.use("/issueBook", issueBookRouter);
app.use("/allRecords", allRecordsRouter);
app.use("/profile-upload", profileImgRoutes);
app.use("/Images", express.static("./public/Images"));
