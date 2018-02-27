const express = require('express');
const favRouter = express.Router();
favRouter.get('/', function(req, res) {
	res.send(' Favorite books index');
});
favRouter.post('/', function(req, res) {
+	res.send(' book create');
});
favRouter.get('/:id', function(req, res) {
	res.send(' get book id ' + req.params.id);
});
favRouter.put('/:id', function(req, res) {
	res.send(' update book id ' + req.params.id);
});
favRouter.delete('/:id', function(req, res) {
	res.send(' delete book id ' + req.params.id);
});

module.exports = favRouter