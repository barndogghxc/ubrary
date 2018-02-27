const express = require('express');
const readRoutes = express.Router();
readRoutes.get('/', function(req, res) {
	res.send(' books read index');
});
readRoutes.post('/', function(req, res) {
+	res.send(' book create');
});
readRoutes.get('/:id', function(req, res) {
	res.send(' get book id ' + req.params.id);
});
readRoutes.put('/:id', function(req, res) {
	res.send(' update book id ' + req.params.id);
});
readRoutes.delete('/:id', function(req, res) {
	res.send(' delete book id ' + req.params.id);
});

module.exports = readRoutes