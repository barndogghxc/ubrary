const express = require('express');

const favsController = require('../controllers/favsController');

const viewsController = require('../controllers/viewsController');

const favsRouter = express.Router();

favsRouter.route('/favs/:id')
  .get(favsController.getOneFavs, viewsController.showOneFavs);
  
  
favsRouter.route('/favs')
  .get(favsController.favsIndex, viewsController.showFavsBooks);


module.exports = favsRouter;