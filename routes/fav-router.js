const express = require('express');
const favRoutes = express.Router();
favRoutes.get('/', function(req, res) {
	res.send(' Favorite books index');
});
favRoutes.post('/', function(req, res) {
+	res.send(' book create');
});
favRoutes.get('/:id', function(req, res) {
	res.send(' get book id ' + req.params.id);
});
favRoutes.put('/:id', function(req, res) {
	res.send(' update book id ' + req.params.id);
});
favRoutes.delete('/:id', function(req, res) {
	res.send(' delete book id ' + req.params.id);
});

module.exports = favRoutes