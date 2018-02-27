const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const allRouter = require('./routes/all-router');
const readRouter = require('./routes/read-router');
const favRouter = require('./routes/fav-router');

// Logger
const logger = require('morgan');

// Init
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());


// Home
app.get('/', function(req, res){
	res.json({
		message: `What's shaking welcome to Ubrary`;
	});
});

// Middleware
app.use('/books', allRouter);
app.use('/readbooks', readRouter);
app.use('/favbooks', favRouter);



// Error Handler
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
}); 