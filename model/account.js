const mongoose = require('mongoose');

const database = 'Login';
mongoose.connect('mongodb://localhost/' + database);

const Schema = mongoose.Schema;
const AccountSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: 'Account',
  }
);

const AccountModel = mongoose.model('Account', AccountSchema);
module.exports = AccountModel;
