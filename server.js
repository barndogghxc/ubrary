const express = require('express');

const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
require('dotenv').config();



const port = process.env.PORT || 3000;
// Init
const app = express();

// Views
const mustache =mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache'); 



app.use(express.static('public')); 

app.use(bodyParser.urlencoded({extended: false }));

app.get('/list', (req, res) => {
	res.render('list');
});

app.get('/book-form', (req, res) => {
	res.render('book-form');
});



// Error Handler
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(process.env.PORT,() => {
	console.log(`Server started on port ${process.env.PORT}`);
}); 