var express = require("express");
var router = express.Router();
const fs = require('fs');
const AWS = require('aws-sdk');



const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' +file.originalname)
  }
})
const upload = multer({ storage: storage }).single('formData')



module.exports = ({
  addPicture,
  getPictures,
  deletePicture,
  getSpecificPicture,
  updatePicture,
}) => {
  router.post("/post", (req, res) => {
    const { title, picture, user_id } = req.body;
    addPicture(title, picture, user_id)
      .then((r) => {
        res.json({
          msg: "Registered",
        });
      })
      .catch((err) => {
        res.json({
          error: err.message,
        });
      });
  });

  router.post("/aws", (req, res) => {

    console.log(req.file)
    console.log(req.body)


    upload(req, res, (err) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      }
      res.send(req.file);
    });


    // // Read content from the file
    // const fileContent = fs.readFileSync(fileName);

    // // Setting up S3 upload parameters
    // const params = {
    //     Bucket: BUCKET_NAME,
    //     Key: 'cat.jpg', // File name you want to save as in S3
    //     Body: fileContent
    // };

    // // Uploading files to the bucket
    // s3.upload(params, function(err, data) {
    //     if (err) {
    //         throw err;
    //     }
    //     console.log(`File uploaded successfully. ${data.Location}`);
    // });

  });

  router.get("/my_pics/:id", (req, res) => {
    const id = req.params.id;

    getPictures(id)
      .then((users) => {
        res.json(users);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id;

    getSpecificPicture(id)
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/delete/:id", (req, res) => {
    const { img_id } = req.body;
    
    deletePicture(img_id)
      .then((r) => {
        res.json({
          msg: "Deleted",
          success: true,
        });
      })
      .catch((err) =>
        res.json({
          msg: `Error: ${err}`,
          success: false,
        })
      );
  });

  router.post("/update/:id", (req, res) => {
    const id = req.params.id;
    const { title, link } = req.body;

    console.log("id, title, link------>", id, title, link);

    updatePicture(id, title, link)
      .then((r) => {
        res.json({
          msg: "Updated",
        });
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
