const express = require('express');
const path = require('path')
const users = require('./controllers/users');//users is a express router/controller
const userModel = require('./models/user')
const app = express();
const port = 3000;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});// it pends the header to the results (as the same as cors)

app.use(function(req, res, next) {
  try {
    const token = (req.headers.authorization || "").split(' ')[1]
    req.user = userModel.getFromToken(token);
  } catch (error) {
    const openActions = ['POST/users', 'POST/users/login']
    if(!openActions.includes(req.method + req.path)){ // check if login required
      next(Error("Login Required"));
    }
  }
  next();
});

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "../NoFramework")));
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({msg: err.message });
  })
app.use(function (err, req, res, next) {
  try {
    const token = (req.headers.authorization || "").split('')[1]
    req.userModel.getFromToken(token)
  } catch (error) {
    if (false) {
      next(Error("login required"))
    }

  }
})
app.listen(port, () => console.log(`Example app http://localhost:${port}`));
