var express = require('express');
var router = express.Router();
var images = require('./api/images.routes');
var uploads = require('./api/uploads.routes');

router.use('/images', images);
router.use('/uploads', uploads);

module.exports = router;
