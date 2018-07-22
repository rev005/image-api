var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var multerConfig = require('./config/multer.config.js');

var index = require('./routes/index');
var api = require('./routes/api.route');
var bluebird = require('bluebird');
var mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', api);

app.post('/uploads', multer(multerConfig).array('photo', 500), function (req, res) {
  console.log('----------');
  console.log(req.files);
  console.log('----------');

  if (req.files.length > 0) {
    res.send(req.files);
  } else {
    res.send('failed');
  }
});

mongoose.Promise = bluebird
mongoose.connect('mongodb://127.0.0.1:27017/wpixy', { useMongoClient: true })
  .then(() => { console.log(`Succesfully Connected to the Mongodb Database  at URL : mongodb://127.0.0.1:27017/wpixy`) })
  .catch(() => { console.log(`Error Connecting to the Mongodb Database at URL : mongodb://127.0.0.1:27017/wpixy`) })

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

module.exports = app;
