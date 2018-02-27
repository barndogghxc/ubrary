const allBooksDB = require('../models/allBooksDB');

module.exports = {
	index (req, res, next) {
    console.log('inside controller index');
		allBooksDB.findAll()
		.then(results => {
			res.locals.books = results
      next()
		})
		.catch(err => {
			next(err)
		})
	},
  create(req, res, next){
	  allBooksDB.save(req.body)
	  .then(results => {
      res.locals.book = result
      next()
    })
    .catch(err => {
      next(err)
    })
	},

  newBook(req, res, next) {
    res.locals.newBook = {
      Title: "",
      Author: "",
      Average_Rating: "",
      Number_of_Pages: ""
    }
    next()
  },

	getOne(req, res, next){
	  allBooksDB.findOne(req.params.id)
	  .then(results => {
      res.locals.book = result
      next()
    })
    .catch(err => {
      next(err)
    })
	},

	update(req, res){
    console.log(Object.assign(req.body, {
      id: req.params.id
    }))
	  allBooksDB.update(Object.assign(req.body, {
      id: req.params.id
    }))
	  .then(result => {
        res.json({
          message: 'ok',
          data: result
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({
          message: 'error',
          error: err
        })
      })
	},

	delete(req, res){
      allBooksDB.destroy
      .then(() => {
        res.json({
          message: 'ok'
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'error',
          error: err
        })
      })
	}
}; 
