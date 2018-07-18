var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var imagesSchema = new mongoose.Schema({
    url: String,
    tag: String,
    date: Date
    //TODO : Add filetype etc
});

imagesSchema.plugin(mongoosePaginate);
const imageModel = mongoose.model('images', imagesSchema);

module.exports = imageModel;
