const express = require('express');

const allController = require('../controllers/allController');

const viewsController = require('../controllers/viewsController');

const allRouter = express.Router();

allRouter.get('read/:id/edit',  allController.updateRead, viewsController.showEditReadBook);


allRouter.route('read/:id')
  .get(allController.getOneRead, viewsController.shoReadOne)
  .put(allController.updateRead, viewsController.handleReadUpdate)
 

allRouter.route('/read')
  .get(allController.readIndex, viewsController.showReadBooks)
  

module.exports = allRouter;