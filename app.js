const express = require('express');

const port = process.env.PORT || 3000;

// Logger
const logger = require('morgan');

// Init
const app = express();

// Home
app.get('/', function(req, res){
	res.send(`What's shaking welcome to Ubrary);
});

app.listen(port, function(){
	console.log(`Server started on port ${port}`);
}); 