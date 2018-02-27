const express = require('express');
const allRouter = express.Router();
const allController = require('../controllers/allController');
allRouter.get('/', allController.index, viewsController.showBooks);
allRouter.post('/', allController.create, viewsController.redirectToBook);
allRouter.get('/:new', allController.newBook, viewsController.newBook);
allRouter.get('/:id', allController.getOne, viewsController.showBook);
allRouter.get('/:id/edit', allController.getOne, viewsController.editBook);
allRouter.put('/:id', allController.update);
allRouter.delete('/:id', allController.delete);

module.exports = allRouter;