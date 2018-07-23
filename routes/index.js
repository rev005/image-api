var express = require('express');
var router = express.Router();

// var fs = require('fs');
// var path = require('path');
// var imageDir = path.join(__dirname, '../public/img');
// var files = [];

// getImages(imageDir);

// function getImages(imageDir, callback) {
//     var fileType = ['.jpeg', '.jpg', '.png', '.gif'];
//     fs.readdir(imageDir, function (err, list) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         for (var i = 0; i < list.length; i++) {
//             if (fileType.indexOf(path.extname(list[i])) !== -1) {
//                 files.push(`./img/${list[i]}`); //store the file name into the array files
//             }
//         }
//         console.log(files);
//         // callback(err, files);
//     });
// }

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index');
});

module.exports = router;
