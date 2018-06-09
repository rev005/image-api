// var express = require('express');
// var router = express.Router();
// var fs = require('fs'),
//     path = require('path'),
//     imageDir = path.join(__dirname, '../public/img');

// router.get('/getImg', function (req, res, next) {
//     getImages();
//     res.send('get img test');
//     //res.render('index', { imagesList: files });
// });

// var files = [];
// function getImages(imageDir, callback) {
//     var fileType = '.jpg';

//     fs.readdir(imageDir, function (err, list) {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         for (var i = 0; i < list.length; i++) {
//             // if(path.extname(list[i]) === fileType) {
//             files.push(`./img/${list[i]}`); //store the file name into the array files
//             // }
//         }
//         console.log(files);
//         // callback(err, files);
//     });
//     return files;
// }

// module.exports = router;