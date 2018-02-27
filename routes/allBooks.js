const express = require('express');
const allRouter = express.Router();
const allController = require('../controllers/allController');
allRouter.get('/', function(req, res) {
	res.send(' All books index');
});
allRouter.post('/', function(req, res) {
+	res.send(' book create');
});
allRouter.get('/:id', function(req, res) {
	res.send(' get book id ' + req.params.id);
});
allRouter.put('/:id', function(req, res) {
	res.send(' update book id ' + req.params.id);
});
allRouter.delete('/:id', function(req, res) {
	res.send(' delete book id ' + req.params.id);
});

module.exports = allRouter