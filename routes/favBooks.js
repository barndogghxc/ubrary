const express = require('express');

const favController = require('../controllers/favController');

const viewsController = require('../controllers/viewsController');

const favRouter = express.Router();



favRouter.route('/fav/:id')
  .get(favController.getOneFav, viewsController.showOneFav);
  
  
favRouter.route('/fav')
  .get(favController.favIndex, viewsController.showFavBooks);


module.exports = favRouter;