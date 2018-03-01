const allBooksDB = require('../models/allBooksDB');

module.exports = {
  makeNewBook(req, res, next) {
    res.locals.newBook = {
      Title: "",
      Author: "",
      Average_Rating: "",
      Number_of_Pages: "",
    };
    next()
  },
	
  index (req, res, next) {
    console.log('inside controller index');
		allBooksDB.findAll()
		.then((books) => {
			res.locals.books = books;
      next();
		})
		.catch(err => next(err));
	},
    
  getOne(req, res, next){
    allBooksDB.findOne(req.params.id)
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
}; 
