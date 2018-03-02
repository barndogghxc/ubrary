const allBooksDB = require('../models/allBooksDB');
const favBooksDB = require('../models/favBooksDB');
const redBooksDB = require('../models/redBooksDB');

module.exports = {
  
  makeNewBook(req, res, next) {
    const newBook = {
      id: null,
      Title: null,
      Author: null,
      Average_Rating: null,
      Number_of_Pages: null,
    };
    res.locals.book = newBook;
    next();
  },
	
  index (req, res, next) {
		allBooksDB.findAll()
		.then((books) => {
			res.locals.books = books;
      next();
		})
		.catch(err => next(err));
	},
    
  getOne(req, res, next){
    allBooksDB.findById(req.params.id)
    .then((book) => {
      res.locals.book = book;
      next();
    })
    .catch(err => next(err));
  },

  create(req, res, next){
	  allBooksDB.save(req.body)
	  .then((book) => {
      res.locals.book = book;
      next();
    })
    .catch(err => next(err));
	},


	update(req, res, next){
	  allBooksDB.update(req.body)
	  .then((book) => {
        res.locals.book = book;
        next();
      })
      .catch(err => next(err));
	},

	delete(req, res, next){
      allBooksDB.delete(req.params.id)
      .then(() => next())
      .catch(err => next(err));
    },

  favIndex (req, res, next) {
    favBooksDB.findFavs()
    .then((favs) => {
      res.locals.favs = favs;
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

  favCreate(req, res, next){
    favBooksDB.saveFav(req.body)
    .then((fav) => {
      res.locals.fav = fav;
      next();
    })
    .catch(err => next(err));
  },


  updateFav(req, res, next){
    favBooksDB.updateFav(req.body)
    .then((fav) => {
        res.locals.fav = fav;
        next();
      })
      .catch(err => next(err));
  },

  readIndex (req, res, next) {
    redBooksDB.findAll()
    .then((reads) => {
      res.locals.reads = reads;
      next();
    })
    .catch(err => next(err));
  },
    
  getOneRead(req, res, next){
    redBooksDB.findById(req.params.id)
    .then((read) => {
      res.locals.read = read;
      next();
    })
    .catch(err => next(err));
  },


  updateRead(req, res, next){
    redBooksDB.update(req.body)
    .then((read) => {
        res.locals.read = read;
        next();
      })
      .catch(err => next(err));
  },
}; 
