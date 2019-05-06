var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');


var imagesSchema = new mongoose.Schema({
    url: String,
    pageUrls: Array,
    title: String,
    tags: Array,
    date: Date
}); //TODO : Add filetype etc

imagesSchema.plugin(mongoosePaginate);
const imageModel = mongoose.model('images', imagesSchema);

module.exports = imageModel;
