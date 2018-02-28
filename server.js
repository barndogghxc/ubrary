const express = require('express');
const path = require('path');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const allRouter = require('./routes/allBooks');
const viewsController = require('./controllers/viewsController');
// const readRouter = require('./routes/readBooks');
// const favRouter = require('./routes/favBooks');

const port = process.env.PORT || 3000;

// Init
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

// Middleware
app.use('/books', allRouter);
// app.use('/readbooks', readRouter);
// app.use('/favbooks', favRouter);

// Home
app.get('/', function(req, res){
	res.render('index', {
		message: `What's shaking welcome to the Ubrary App!`
	});
});





// Error Handler
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
}); 