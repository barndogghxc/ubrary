const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const {Client} = require('pg').Client;
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

app.get('/book/add', (req, res) => {
	res.render('book-form');
});

app.post('/book/add', (req, res) => {

	const client = new Client();
	client.connect()
	  .then(()=> {
	  	const sql = 'INSERT INTO books(title, author, average_rating, number_of_pages) '
	  	client.query('sql', 'params')
	  });
	res.redirect('/list');
});


// Error Handler
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(process.env.PORT,() => {
	console.log(`Server started on port ${process.env.PORT}`);
}); 