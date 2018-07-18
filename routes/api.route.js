var express = require('express')
var router = express.Router()
var images = require('./api/images.routes')

router.use('/images', images);

module.exports = router;
