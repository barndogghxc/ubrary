const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig)
module.exports = {
	findAll () {
		return db.any('SELECT * FROM books');
	},
	findOne (id) {
		return db.any('SELECT * FROM books WHERE id=$1', id)
	},
	save (book) {
		return db.one(`INSERT INTO books 
		(Title, Author, Average_Rating, Number_of_Pages) VALUES
		($[Title], $[Author], $[Average_Rating], $[Number_of_Pages])
		RETURNING *`, book);
	},
	update (book) {
		return db.one(`UPDATE books
		SET Title=$[Title], Author=$[Author], Average_Rating=$[Average_Rating], Number_of_Pages=$[Number_of_Pages]
		WHERE id=$[id]
		RETURNING *`, book);
	},
	destroy (id) {
		return db.none('DELETE FROM books WHERE id=$1', id);
	}
}; 