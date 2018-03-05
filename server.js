const express = require('express');
const mustacheExpress = require('mustache-express');
const logger = require('morgan');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const allRouter = require('./routes/allBooks');
const redRouter = require('./routes/redBooks');
const favRouter = require('./routes/favBooks');
const port = process.env.PORT || 3000;
// Init
const app = express();

// Views
const mustache =mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache'); 

// Logging
app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended: false,}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public'))); 

// Middleware
app.use('/books', allRouter);
app.use('/favs', favRouter);
app.use('/read', redRouter);

// Home
app.get('/', (req, res) => {
	res.render('index', {
		message:       'Whats Shaking?!',
    	documentTitle: 'This is Ubrary!!',
    	subTitle:      'Read the good books first, or you may not have a chance to read them at all. - Henry Thoreau',
	});
});

// Error Handler
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
}); 