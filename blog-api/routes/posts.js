const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('file-system');

// Configure Multer
const storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null, './uploads');
	},
	filename: function(req, file, cb){
		cb(null, new Date().toISOString() + file.originalname);
	}
});

const upload = multer({
	dest: '/uploads/',
	storage: storage
});

// Import Post schema/model
const Post = require('../models/post');

//<-----------GETs------------->
router.get('/', (req, res, next) => {
	Post.find()
	.select('headline postImage postDate category article')
	.exec()
	.then(docs => {
		console.log(docs);
		const allPosts = {
		totalPosts: docs.length,
		blogPosts: docs.map(doc => {
			return {
				_id: doc._id,
				headline: doc.headline,
				postImage: doc.postImage,
				postDate: doc.postDate,
				category: doc.category,
				article: doc.article
			}
		})
	};
	//Must use dot notation to call which key:value
	res.status(200).json(allPosts.blogPosts);
})
	.catch(error => {
		console.log(error);
		res.status(500).json(error);
	})
});

//MUSIC POSTS
router.get('/music', (req, res, next) => {
	Post.findOne({'category' : 'Music'})
	.select('headline postImage postDate category article')
	.exec()
	.then(docs => {
		console.log(docs);
		const allMusicPosts = {
		totalPosts: docs.length,
		musicPosts: docs.map(doc => {
			return {
				_id: doc._id,
				headline: doc.headline,
				postImage: doc.postImage,
				postDate: doc.postDate,
				category: doc.category,
				article: doc.article
			}
		})
	};
	//Must use dot notation to call which key:value
	res.status(200).json(allMusicPosts.musicPosts);
})
	.catch(error => {
		console.log(error);
		res.status(500).json(error);
	})
});

router.get('/:postId', (req, res, next) => {
	res.status(200).json({
		message: 'GET ID request is functioning'
	});
});


//<-----------POSTs------------>
router.post('/', upload.single('postImage'), (req, res, next) => {
	console.log(req.file);
	//Define how a POST should look
	const post = new Post({
		_id: new mongoose.Types.ObjectId,
		headline: req.body.headline,
		article: req.body.article,
		postDate: req.body.postDate,
		category: req.body.category,
		postImage: req.file.path
	});

//BOILER PLATE CODE FOR BINARY IMAGE UPLOAD DECIPHERING
	// post.postImage.data = fs.readFileSync(req.file.path);
  // post.postImage.contentType = 'image/png';

	post.save()
	.then(result => {
		console.log(result);
		res.status(201).json({
		message: "New post created successfully!",
		createdPost: {
			_id: result._id,
			headline: result.headline,
			postImage: result.postImage,
			postDate: result.postDate,
			category: result.category,
			article: result.article
		  }
	  });
	})
	.catch(error => {
		console.log(error);
		res.status(500).json(error);
	});
});

module.exports = router;
