// Accessing the Service that we just created
var ImageService = require('../services/image.service');

// Saving the context of this module inside the _the variable
_this = this

// Async Controller function to get the To do List
exports.getImages = async function(req, res, next){
    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 1000;

    try{
        var images = await ImageService.getImages({}, page, limit)
        // Return the images url list with the appropriate HTTP Status Code and Message.
        return res.status(200).json({status: 200, data: images, message: "Succesfully Recieved Images"});

    }catch(e){
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: e.message});
    }
}

exports.createImage = async function(req, res, next){
    // Req.Body contains the form submit values.
    var image = {
        url: req.body.url,
        tags: req.body['tags[]']
    };

    try{
        // Calling the Service function with the new object from the Request Body
        var createImage = await ImageService.createImage(image);
        return res.status(201).json({status: 201, data: createImage, message: "Succesfully Created Image Obj"});
    }catch(e){
        //Return an Error Response Message with Code and the Error Message.
        return res.status(400).json({status: 400, message: "Image Creation was Unsuccesfull"});
    }
}

// exports.updateTodo = async function(req, res, next){

//     // Id is necessary for the update

//     if(!req.body._id){
//         return res.status(400).json({status: 400., message: "Id must be present"})
//     }

//     var id = req.body._id;

//     console.log(req.body)

//     var todo = {
//         id,
//         title: req.body.title ? req.body.title : null,
//         description: req.body.description ? req.body.description : null,
//         status: req.body.status ? req.body.status : null
//     }

//     try{
//         var updatedTodo = await TodoService.updateTodo(todo)
//         return res.status(200).json({status: 200, data: updatedTodo, message: "Succesfully Updated Tod"})
//     }catch(e){
//         return res.status(400).json({status: 400., message: e.message})
//     }
// }

// exports.removeTodo = async function(req, res, next){

//     var id = req.params.id;

//     try{
//         var deleted = await TodoService.deleteTodo(id)
//         return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
//     }catch(e){
//         return res.status(400).json({status: 400, message: e.message})
//     }

// }
