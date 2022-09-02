const express = require('express');
const router = express.Router();
const AccountModel = require('../model/account');

router.get('/', (req, res) => {
  res.send('Login Account');
});
router.post('/', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  AccountModel.findOne({ username: username, password: password })
    .then((data) => {
      if (data) {
        res.status(200).send('Login successfully');
      } else {
        res.status(400).send('Failed to login, please try again');
      }
    })
    .catch((err) => {
      res.status(400).send('Failed to login, please try again');
    });
});
module.exports = router;
