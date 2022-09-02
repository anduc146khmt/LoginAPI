const express = require('express');
const router = express.Router();
const AccountModel = require('../model/account');
// Get All
router.get('/', (req, res) => {
  // router code here
  AccountModel.find({})
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send('There are no data available');
      }
    })
    .catch((err) => {
      res.status(500).send('There are no data available');
    });
});

//Get By ID
router.get('/:id', (req, res) => {
  // router code here
  const id = req.params.id;
  AccountModel.findById(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send('There are no account available');
      }
    })
    .catch((err) => {
      res.status(500).send('There are no account available');
    });
});

// Insert Data
router.post('/', (req, res) => {
  // router code here
  const username = req.body.username;
  const password = req.body.password;
  AccountModel.findOne({ username: username, password: password })
    .then((data) => {
      if (data) {
        res.status(404).send('Account is already exist');
      } else {
        AccountModel.create({ username: username, password: password });
        res.status(200).send('Create account successfully');
      }
    })
    .catch((err) => {
      res.status(500).send('Account is already exist');
    });
});

// Modify Data
router.put('/:id', (req, res) => {
  // router code here
  const id = req.params.id;
  const newPassword = req.body.newPassword;
  AccountModel.findByIdAndUpdate(id, {
    password: newPassword,
  })
    .then((data) => {
      res.status(200).send('Update password successfully');
    })
    .catch((err) => {
      res.status(500).send('Failed to update password');
    });
});

// Delete Data
router.delete('/:id', (req, res) => {
  // router code here
  const id = req.params.id;
  AccountModel.deleteOne({ _id: id })
    .then((data) => {
      if (data) {
        res.status(200).send('Delete account successfully');
      } else {
        res.status(404).send('There are no account available');
      }
    })
    .catch((err) => {
      res.status(500).send('Failed to delete account');
    });
});

module.exports = router;
