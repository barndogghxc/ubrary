const express = require('express');

const allController = require('../controllers/allController');

const viewsController = require('../controllers/viewsController');

const allRouter = express.Router();

allRouter.get('/:id/edit',  allController.getOne);
allRouter.get('/new',  allController.makeNewBook);

allRouter.route('/:id')
  .get(allController.getOne)
  .put(allController.update)
  .delete(allController.delete);

allRouter.route('/')
  .get(allController.index)
  .post(allController.create);

module.exports = allRouter;

