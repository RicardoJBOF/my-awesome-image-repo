const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');

const { getPostsByUsers } = require("../helpers/dataHelpers");

module.exports = ({ getUsers, getUserByEmail, addUser, getUsersPosts }) => {
  /* GET users listing. */
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/posts", (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post("/", (req, res) => {
    const { first_name, last_name, email, password } = req.body;

    getUserByEmail(email)
      .then((user) => {
        if (user) {
          res.json({
            msg: "Sorry, a user account with this email already exists",
          });
        } else {
          return addUser(first_name, last_name, email, password);
        }
      })
      .then((newUser) => res.json(newUser))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.post('/authenticate', (req, res) => {

    const {
      email,
      password,
    } = req.body;

    getUserByEmail(email)
    .then(user => {
      if (user) {
        if (user.password === password) {
          const token = jwt.sign({ id: user.id }, process.env.TOKEN_SECRET); 
          res.json({ user, token })
          res.end()
        } else {
          res.json({
            msg: 'Password and email do not match!'
          });
        }
      } else {
        res.json({
          msg: 'Email not registered!'
        });
      }
    })
    .catch(err => {
      res.json({
        error: err.message
      })
    });
  })








  return router;
};
