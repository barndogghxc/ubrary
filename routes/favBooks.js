const express = require('express');

const allController = require('../controllers/allController');

const viewsController = require('../controllers/viewsController');

const favRouter = express.Router();

favRouter.get('/favs/:id/edit',  allController.getOneFav);


favRouter.route('/faves/:id')
  .get(allController.getOneFav)
  .put(allController.updateFav);

favRouter.route('/faves')
  .get(allController.favIndex)
  .post(allController.favCreate);

module.exports = favRouter;