var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');

var index = require('./routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/getImg', getImg);

var multerConfig = {
  storage: multer.diskStorage({
    destination: function (req, file, next) {
      next(null, './public/img');
    },

    //specify the filename to be unique
    filename: function (req, file, next) {
      console.log(file);

      const ext = file.mimetype.split('/')[1];
      next(null, file.fieldname + '-' + Date.now() + '.' + ext);
    }
  }),

  // filter out and prevent non-image files.
  fileFilter: function (req, file, next) {
    if (!file) {
      next();
    }

    // only permit image mimetypes
    const image = file.mimetype.startsWith('image/');
    if (image) {
      console.log('photo uploaded');
      next(null, true);
    } else {
      console.log("file not supported")
      return next();
    }
  }
};

app.post('/uploads', multer(multerConfig).array('photo',10), function (req, res) {
  res.send('Complete! Check out your public/img folder.  Please note that files not encoded with an image mimetype are rejected. <a href="/">try again</a>');
});

module.exports = app;
