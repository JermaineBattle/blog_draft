const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// AUTHENTICATION / CORS
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

	if (req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
		return res.status(200).json({});
	};
	next();
})


// Connect MongoDB through Mongoose
mongoose.connect('mongodb+srv://admin:admin@hofdb-yox7s.mongodb.net/test?retryWrites=true', {useNewUrlParser: true});

// Import Routes
const postsRoute = require('./routes/posts');
// Instantiate Routes' Middleware
app.use('/posts', postsRoute);

mongoose.Promise = global.Promise;

// Initiate Morgan
app.use(morgan('dev'));

//Make Uploads folder publically available
app.use('/uploads', express.static('uploads'));

// Initiate bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Error Handling
app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});





module.exports = app;
