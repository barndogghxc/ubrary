const express = require('express');

const port = process.env.PORT || 3000;

const allRouter = require('./routes/all-router');

// Logger
const logger = require('morgan');

// Init
const app = express();

// Home
app.get('/', function(req, res){
	res.json({
		message: `What's shaking welcome to Ubrary`;
	});
});

// Middleware
app.use('/books', allRouter);

// Error Handler
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
}); 