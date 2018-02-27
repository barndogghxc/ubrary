const allBooksDB = require('../models/allBooksDB');

module.exports = {
	index (req, res) {
		allBooksDB.findAll()
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
		allBooksDB.save
	}

	getOne(req, res){
		allBooksDB.findOne
	}

	update(req, res){
		allBooksDB.update
	}

	delete(req, res){
		allBooksDB.destroy
	}
} 