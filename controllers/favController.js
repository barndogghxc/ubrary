const favBooksDB = require('../models/favBooksDB');

module.exports = {
	index (req, res) {
		favBooksDB.findAll()
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
		favBooksDB.save
	}

	getOne(req, res){
		favBooksDB.findOne
	}

	update(req, res){
		favBooksDB.update
	}

	delete(req, res){
		favBooksDB.destroy
	}
} 