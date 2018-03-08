const db = require('../db/connection');
module.exports = {
	showReadBooks () {
		return db.any('SELECT * FROM read');
	},
	showReadBook(id) {
		return db.one('SELECT * FROM read WHERE id=$1', id)
	}
};