const db = require('../db/connection');
module.exports = {
	findFavs () {
		return db.any('SELECT * FROM favs');
	},
	findFavId (id) {
		return db.one('SELECT * FROM favs WHERE id=$1', id)
	}
};