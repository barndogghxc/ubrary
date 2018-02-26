const express = require('express');
const allRoutes = express.Router();
allRoutes.get('/', function(req, res) {
	res.send(' All books index');
});
allRoutes.post('/', function(req, res) {
+	res.send(' book create');
});
allRoutes.get('/:id', function(req, res) {
	res.send(' get book id ' + req.params.id);
});
allRoutes.put('/:id', function(req, res) {
	res.send(' update book id ' + req.params.id);
});
allRoutes.delete('/:id', function(req, res) {
	res.send(' delete book id ' + req.params.id);
});

module.exports = allRoutes