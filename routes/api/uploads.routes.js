var express = require('express');
var router = express.Router();
var multer = require('multer');
var multerConfig = require('../../config/multer.config.js');

router.post('/', multer(multerConfig).array('photo', 500), function (req, res) {
    console.log('----------');
    console.log(req.files);
    console.log('----------');

    if (req.files.length > 0) {
        res.send(req.files);
    } else {
        res.send('failed');
    }
});

module.exports = router;