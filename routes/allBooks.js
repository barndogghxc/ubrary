const express = require('express');


const allController = require('../controllers/allController');
const viewsController = require('../controllers/viewsController');
const allRouter = express.Router();

allRouter.get('/:id/edit', allController.getOne, viewsController.showEditForm, viewsController.show404);
allRouter.get('/new', allController.makeBlankQuote, viewsController.showAddForm, viewsController.show404);

allRouter.route('/:id')
  .get(allController.getOne, viewsController.showBook)
  .put(allController.update, viewsController.editBook)
  .delete(allController.delete)

allRouter.route('/')
  .get(allController.index, viewsController.showBooks)
  .post(allController.create, viewsController.newBook);

module.exports = allRouter;





