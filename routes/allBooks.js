const express = require('express');

const allController = require('../controllers/allController');

const viewsController = require('../controllers/viewsController');

const allRouter = express.Router();

allRouter.get('/:id/edit',  allController.getOne, viewsController.showEditBook);
allRouter.get('/new',  allController.makeNewBook, viewsController.showNewBook);

allRouter.route('/:id')
  .get(allController.getOne, viewsController.showOne)
  .put(allController.update, viewsController.handleUpdate)
  .delete(allController.delete, viewsController.handleDelete);

allRouter.route('/')
  .get(allController.index, viewsController.showBooks)
  .post(allController.create, viewsController.handleCreate);

module.exports = allRouter;

