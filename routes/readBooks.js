const express = require('express');
const readRouter = express.Router();
readRouter.get('/', function(req, res) {
	res.send(' books read index');
});
readRouter.post('/', function(req, res) {
+	res.send(' book create');
});
readRouter.get('/:id', function(req, res) {
	res.send(' get book id ' + req.params.id);
});
readRouter.put('/:id', function(req, res) {
	res.send(' update book id ' + req.params.id);
});
readRouter.delete('/:id', function(req, res) {
	res.send(' delete book id ' + req.params.id);
});

module.exports = readRouter