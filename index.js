const mongoose = require('mongoose');

const DatabaseName = 'NodeJS';
const URI = 'mongodb://localhost:27017/' + DatabaseName;
mongoose.connect(URI, () => {
  console.log('Connect to MongoDB successfully');
});
// Schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
  name: String,
  age: Number,
});
// Model
const userModel = mongoose.model('user', UserSchema);
const obj = {
  name: 'Hello',
  age: 2022 - 1954,
};

/*use Model
userModel.create(obj, () => {
  console.log('Created object successfully');
});
*/

/* Delete model
userModel.deleteOne({ _id: '630231ae92bd762d0d9197a5' }, () => {
  console.log('Delete object successfully');
});
*/

/* Update model
userModel.updateOne(
  { _id: '630232d20f0a33d76f1f9781' },
  { name: 'Nguyen Duc Loc' },
  () => {
    console.log('Update object successfully');
  }
);
*/
