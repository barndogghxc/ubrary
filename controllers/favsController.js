// const favsBooksDB = require('../models/favsBooksDB');

// module.exports = {

//   favsIndex (req, res, next) {
//     favsBooksDB.findFavs()
//     .then((favs) => {
//       res.locals.fav = favs;
//       next();
//     })
//     .catch(err => next(err));
//   },
    
//   getOneFavs(req, res, next){
//     favsBooksDB.findFavsId(req.params.id)
//     .then((fav) => {
//       res.locals.fav = fav;
//       next();
//     })
//     .catch(err => next(err));
//   },
// }; 