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
		booksReadDB.save
	}

	getOne(req, res){
		booksReadDB.findOne
	}

	update(req, res){
		booksReadDB.update
	}

	delete(req, res){
		booksReadDB.destroy
	}
} 