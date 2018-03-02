const express = require('express');

const allController = require('../controllers/allController');

const viewsController = require('../controllers/viewsController');

const allRouter = express.Router();

allRouter.get('/:id/edit',  allController.getOne, viewsController.);
allRouter.get('/new',  allController.makeNewBook, viewsController.);

allRouter.route('/:id')
  .get(allController.getOne, viewsController.showBook)
  .put(allController.update, viewsController.)
  .delete(allController.delete, viewsController.);

allRouter.route('/')
  .get(allController.index, viewsController.showBooks)
  .post(allController.create, viewsController.handleCreate);

module.exports = allRouter;

