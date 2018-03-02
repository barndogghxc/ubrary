const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);
module.exports = {
	findFavs () {
		return db.any('SELECT * FROM favs');
	},
	findFavId (id) {
		return db.one('SELECT * FROM favs WHERE id=$1', id)
	},
	saveFav (fav) {
		return db.one(`INSERT INTO favs 
		(title, author, average_Rating, number_of_Pages) VALUES
		($[title], $[author], $[average_rating], $[number_of_pages])
		RETURNING *`, fav);
	},
	updateFav (fav) {
		return db.one(`UPDATE favs
		SET title=$[title], author=$[author], average_rating=$[average_rating], number_of_pages=$[number_of_pages]
		WHERE id=$[id]
		RETURNING *`, fav);
	}

};