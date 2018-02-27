const express = require('express');
const readRouter = express.Router();
const readController = require('../controllers/readController');
readRouter.get('/', readController.index);
readRouter.post('/', readController.create);
readRouter.get('/:id', readController.getOne);
readRouter.put('/:id', readController.update);
readRouter.delete('/:id', readController.delete);


module.exports = readRouter;