const favBooksDB = require('../models/favBooksDB');

module.exports = {

  favIndex (req, res, next) {
    favBooksDB.findFavs()
    .then((favs) => {
      res.locals.fav = fav;
      next();
    })
    .catch(err => next(err));
  },
    
  getOneFav(req, res, next){
    favBooksDB.findFavId(req.params.id)
    .then((fav) => {
      res.locals.fav = fav;
      next();
    })
    .catch(err => next(err));
  },
}; 