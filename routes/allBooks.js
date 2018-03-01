const express = require('express');
const allRouter = express.Router();
const allController = require('../controllers/allController');
const viewsController = require('../controllers/viewsController');
allRouter.get('/', allController.index, viewsController.showBooks);
allRouter.post('/', allController.create);

allRouter.get('/:id', allController.getOne);
allRouter.get('/:id', allController.update);
allRouter.delete('/:id', allController.delete);
allRouter.get('/:new', allController.newBook);

module.exports = allRouter;