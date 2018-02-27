const allBooksDB = require('../models/allBooksDB');

module.exports = {
	index (req, res, next) {
    console.log('inside controller index');
		allBooksDB.findAll()
		.then(results => {
			res.locals.books = results
      next()
		})
	})
		.catch(err => {
			next(err)
		})
	},

	create(req, res){
	  allBooksDB.save(req.body)
	  .then(result => {
      	res.json({
          message: 'ok',
          data: result
        })
      })
      .catch(err => {
      	res.status(500).json({
          message: 'Error',
          error: err
      	})
      })
	},

	getOne(req, res){
	  allBooksDB.findOne(req.params.id)
	  .then(result => {
        res.json({
         message: 'ok',
         data: result
        })
      })
      .catch(err => {
        res.status(500).json({
          message: 'error',
          error: err
        })
      })
	},

	update(req, res){
	  allBooksDB.update(req.body)
	  .then(result => {
        res.json({
          message: 'ok',
          data: result
        })
      })
      .catch(err => {
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
