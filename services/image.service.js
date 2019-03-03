var imageModel = require('../models/image.model');

exports.getImages = async function(query, page, limit){
    var options = {
        page,
        limit
    }

    try {
        var images = await imageModel.paginate(query, options);
        return images;

    } catch (e) {
        throw Error('Error while Paginating Images')
    }
}

exports.createImage = async function (image) {
    // Creating a new Mongoose Object by using the new keyword
    var newImage = new imageModel({
        url: image.url,
        pageUrls: image.pageUrls,
        tags: image.tags,
        date: new Date()
    });
    
    try { // Saving the Image to Mongo
        var saveImage = await newImage.save();
        return saveImage;

    } catch (e) { // return a Error message describing the reason
        throw Error("Error while Creating Image");
    }
}

// exports.updateTodo = async function(todo){
//     var id = todo.id

//     try{
//         //Find the old Todo Object by the Id

//         var oldTodo = await imageModel.findById(id);
//     }catch(e){
//         throw Error("Error occured while Finding the Todo")
//     }

//     // If no old Todo Object exists return false
//     if(!oldTodo){
//         return false;
//     }

//     console.log(oldTodo)

//     //Edit the Todo Object
//     oldTodo.title = todo.title
//     oldTodo.description = todo.description
//     oldTodo.status = todo.status


//     console.log(oldTodo)

//     try{
//         var savedTodo = await oldTodo.save()
//         return savedTodo;
//     }catch(e){
//         throw Error("And Error occured while updating the Todo");
//     }
// }

// exports.deleteTodo = async function(id){

//     // Delete the Todo
//     try{
//         var deleted = await imageModel.remove({_id: id})
//         if(deleted.result.n === 0){
//             throw Error("Todo Could not be deleted")
//         }
//         return deleted
//     }catch(e){
//         throw Error("Error Occured while Deleting the Todo")
//     }
// }
