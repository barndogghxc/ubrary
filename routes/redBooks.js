const express = require('express');

const allController = require('../controllers/allController');

const viewsController = require('../controllers/viewsController');

const readRouter = express.Router();

readRouter.get('/reads/:id/edit',  allController.getOneRead)

readRouter.route('/reads/:id')
  .get(allController.getOneRead)
  .put(allController.updateRead)

readRouter.route('/reads')
  .get(allController.readIndex)


module.exports = readRouter;