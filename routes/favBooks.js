const express = require('express');

const allController = require('../controllers/allController');

const viewsController = require('../controllers/viewsController');

const favRouter = express.Router();

favRouter.get('/favs/:id/edit',  allController.getOneFav, viewsController.showEditFavBook);


favRouter.route('/favs/:id')
  .get(allController.getOneFav, viewsController.showOneFav)
  .put(allController.updateFav, viewsController.handleFavUpdate)
  

favRouter.route('/favs')
  .get(allController.favIndex, viewsController.showFavBooks)
  .post(allController.favCreate, viewsController.handleFavCreate);

module.exports = favRouter;