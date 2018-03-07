const express = require('express');

const allController = require('../controllers/allController');

const viewsController = require('../controllers/viewsController');

const favRouter = express.Router();

favRouter.get('/:id/edit',  allController.getOne, viewsController.showEditBook);
favRouter.get('/new',  allController.makeNewBook, viewsController.showNewBook);

favRouter.route('/:id')
  .get(allController.getOne, viewsController.showOne)
  .put(allController.update, viewsController.handleUpdate)
  .delete(allController.delete, viewsController.handleDelete);

favRouter.route('/')
  .get(allController.index, viewsController.showBooks)
  .post(allController.create, viewsController.handleCreate);

module.exports = favRouter;