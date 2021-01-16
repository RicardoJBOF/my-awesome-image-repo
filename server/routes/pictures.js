var express = require('express');
var router = express.Router();

module.exports = ( {addPicture, getPictures, deletePicture} ) => {
  
  router.post("/post", (req, res) => {
    const { title, picture, user_id} = req.body;
    addPicture(title, picture, user_id)
    .then( r => {
      res.json({
        msg: "Registered",
      })
    })
    .catch((err) => {
      res.json({
        error: err.message,
      });
    })
  });

  router.get("/", (req, res) => {

    getPictures()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });



  router.post("/delete/:id", (req, res) => {

    console.log(`ME DELETE, ID: ${req.body.id}`)
    const { id } = req.body;

    deletePicture(id)
    .then( r => {
      res.json({
        msg: "Deleted",
      })
    })
    .catch((err) =>
      res.json({
        error: err.message,
      })
    );

  });



  return router;
};

