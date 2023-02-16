const router = require("express").Router();
const db = require("../config/config");
const fs = require("fs");
const cloud = require("../config/cloudinary.config");
const cloudinary = require("cloudinary").v2;

// PROFILE IMAGES
const multer = require("multer");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
  //   // cb(null, "./Images");
  //   cb(null, "./public/Images/");
  // },
  filename: (req, file, cb) => {
    // RENAME IMAGE FILE NAME
    return cb(null, Date.now() + path.extname(file.originalname));
  },
});

// IMAGE FILTER
const isImage = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(null, Error("Only image is allowed"));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: isImage,
});

// ADMIN PROFILE IMAGE UPLOAD
router.put("/:id", upload.single("image"), async (req, res) => {
  const id = req.params.id;

  if (!/\.(jpg|png|jpeg)/i.test(req.file.originalname))
    return res
      .status(409)
      .send({ message: "Only image files (jpg, jpeg, png) are allowed!" });

  const uploads = cloudinary.uploader.upload(req.file.path, {
    folder: "svcc-library-profiles",
  });

  await uploads
    .then((data) => {
      db.query(
        "UPDATE admin SET image = ? WHERE ADMIN_ID = ?",
        [data.secure_url, id],
        (err, result) => {
          if (err) {
            res.status(409).send({ message: err });
          } else {
            res.status(200).send({
              data: result,
              message: "Profile image uploaded.",
            });
          }
        }
      );
    })
    .catch((err) => {
      res.status(409).send({ message: err });
      console.log(err);
    });
});

// STUDENT PROFILE IMAGE UPLOAD
router.put("/student/:id", upload.single("image"), async (req, res) => {
  const id = req.params.id;

  if (!/\.(jpg|png|jpeg)/i.test(req.file.originalname))
    return res
      .status(409)
      .send({ message: "Only image files (jpg, jpeg, png) are allowed!" });

  const uploads = cloudinary.uploader.upload(req.file.path, {
    folder: "svcc-library-profiles",
  });

  await uploads
    .then((data) => {
      db.query(
        "UPDATE student_acc SET `image` = ? WHERE STUD_ID = ?",
        [data.secure_url, id],
        (err, result) => {
          if (err) {
            res.status(409).send({ message: err });
          } else {
            res.status(200).send({
              data: result,
              message: "Profile image uploaded.",
            });
          }
        }
      );
    })
    .catch((err) => {
      res.status(409).send({ message: err });
      console.log(err);
    });
});

module.exports = router;
