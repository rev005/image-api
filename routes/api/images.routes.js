var express = require('express');
var router = express.Router();

// Getting the Todo Controller that we just created
var ImageController = require('../../controllers/images.controller');

// Map each API to the Controller FUnctions
router.get('/', ImageController.getImages);
router.post('/', ImageController.createImage);
// router.put('/', ImageController.updateTodo);
// router.delete('/:id',ImageController.removeTodo);

// Export the Router
module.exports = router;
