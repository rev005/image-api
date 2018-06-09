var express = require('express');
var router = express.Router();

var fs = require('fs'),
    path = require('path'),
    imageDir = path.join(__dirname, '../public/img')

getImages(imageDir);
var files = [];
function getImages(imageDir, callback) {
    var fileType = '.jpg';
    fs.readdir(imageDir, function (err, list) {
        if (err) {
            console.log(err);
            return;
        }
        for (var i = 0; i < list.length; i++) {
            // if(path.extname(list[i]) === fileType) {
            files.push(`./img/${list[i]}`); //store the file name into the array files
            // }
        }
        console.log(files);
        // callback(err, files);
    });
}

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { imagesList: files });
});

module.exports = router;
