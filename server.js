const express = require('express');

const mustacheExpress = require('mustache-express');
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

app.get('/list', (req, res) => {
	res.render('list');
});
app.get('/favs', (req, res) => {
	res.render('favs');
});
app.get('/read', (req, res) => {
	res.render('read');
});

// Error Handler
app.use('*', function(req, res){
	res.status(404).json('Not Found!');
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
}); 