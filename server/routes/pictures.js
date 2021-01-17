var express = require("express");
var router = express.Router();
const fs = require('fs');
const AWS = require('aws-sdk');

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
