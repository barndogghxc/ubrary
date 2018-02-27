const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig)
module.exports = {
	findAll () {
		return db.any('SELECT * FROM book_db');
	},
	findOne (id) {
		return db.any('SELECT * FROM book_db WHERE id=$1', id)
	},
	save (book) {
		return db.one(`INSERT INTO book_db 
		(Title, Author, Average_Rating, Number_of_Pages) VALUES
		($[Title], $[Author], $[Average_Rating], $[Number_of_Pages])
		RETURNING *`, book);
	},
	update (book) {
		return db.one(`UPDATE book_db
		SET Title=$[Title], Author=$[Author], Average_Rating=$[Average_Rating], Number_of_Pages=$[Number_of_Pages]
		WHERE id=$[id]
		RETURNING *`, book);
	},
	destroy (id) {
		return db.none('DELETE FROM book_db WHERE id=$1', id);
	}
}; 