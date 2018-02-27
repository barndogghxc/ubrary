const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const port = process.env.PORT || 3000;

const allRouter = require('./routes/allBooks');
const allController = require('../controllers/viewsController');
// const readRouter = require('./routes/readBooks');
// const favRouter = require('./routes/favBooks');


// Logger
const logger = require('morgan');

// Init
const app = express();

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));


// Home
app.get('/', function(req, res){
	res.render('index', {
		message: `What's shaking welcome to the Ubrary App!`
	});
});

// Middleware
app.use('/books', allRouter);
// app.use('/readbooks', readRouter);
// app.use('/favbooks', favRouter);



// Error Handler
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
}); 