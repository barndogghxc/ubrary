const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');
const db = pgp(dbConfig);
module.exports = {
	showReadBooks () {
		return db.any('SELECT * FROM reads');
	},
	showReadBook(id) {
		return db.one('SELECT * FROM reads WHERE id=$1', id)
	},
	saveRead (read) {
		return db.one(`INSERT INTO read 
		(title, author, average_Rating, number_of_Pages) VALUES
		($[title], $[author], $[average_rating], $[number_of_pages])
		RETURNING *`, read);
	},
	updateRead (read) {
		return db.one(`UPDATE read
		SET title=$[title], author=$[author], average_rating=$[average_rating], number_of_pages=$[number_of_pages]
		WHERE id=$[id]
		RETURNING *`, read);
	}
};