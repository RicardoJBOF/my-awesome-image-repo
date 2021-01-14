var express = require('express');
var router = express.Router();

module.exports = ( {addPicture} ) => {
  
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

  return router;
};

