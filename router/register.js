const express = require('express');
const router = express.Router();
const AccountModel = require('../model/account');

router.get('/', (req, res) => {
  res.send('Register Account');
});
router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  AccountModel.findOne({ username: username })
    .then((data) => {
      if (data) {
        res.status(400).json('Username is exist');
      } else {
        return AccountModel.create({
          username: username,
          password: password,
        });
      }
    })
    .then((data) => {
      res.json('Congrats, create new account successfully');
    })
    .catch((err) => {
      res.status(400).json('Failed to create account');
    });
});
module.exports = router;
