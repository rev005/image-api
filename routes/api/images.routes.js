var express = require('express');
var router = express.Router();

var ImageController = require('../../controllers/images.controller');

// Map each API to the Controller FUnctions
router.get('/', ImageController.getImages);
router.post('/', ImageController.createImage);
// router.put('/', ImageController.updateTodo);
// router.delete('/:id',ImageController.removeTodo);

module.exports = router;
