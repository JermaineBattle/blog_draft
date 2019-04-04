
const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	headline: {type: String, required: true},
	postDate: {type: Date, default: Date.now},
	category: {type: String, required: true},
	//DONT FORGET TO UPDATE postImage
	//Check to see if post image is showing in the view
	postImage: {type: String, required: true},
	// postImage: {
	// 	data: Buffer,
	// 	contentType: String
	// },
	article: {type: String, required: true},
	//ADD COMMENT SECTION

});


module.exports = mongoose.model('Post', postSchema);
