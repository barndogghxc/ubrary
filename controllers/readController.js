const booksReadDB = require('../models/booksReadDB');

module.exports = {
	index (req, res) {
		booksReadDB.findAll()
		.then(results => {
			res.json({
				message: 'ok',
				data: results
			})
		})
		.catch(err => {
			res.status(500).json({
				message: 'error',
				error: err
			})
		})
	},

	create(req, res){
	  booksReadDB.save(req.body)
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
	  booksReadDB.findOne(req.params.id)
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
	  booksReadDB.update(req.body)
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
      booksReadDB.destroy
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
