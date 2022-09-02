const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');
const RegisterRouter = require('./router/register');
const LoginRouter = require('./router/login');
const AccountRouter = require('./router/account');
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// use signup
app.use('/register', RegisterRouter);
// use login
app.use('/login', LoginRouter);
// use account
app.use('/api/account', AccountRouter);
// use public
app.use('/public', express.static(path.join(__dirname, '/public')));
app.get('/', (req, res) => {
  var urlPath = path.join(__dirname, 'index.html');
  res.sendFile(urlPath);
});
app.listen(port, () =>
  console.log('Server is up and running on port : ' + port)
);
