
const db = require('../db/connection');
module.exports = {
	findAll () {
		return db.any('SELECT * FROM books');
	},
	findById (id) {
		return db.one('SELECT * FROM books WHERE id=$1', id)
	},
	save (book) {
		return db.one(`
		  INSERT INTO books (title, author, average_rating, number_of_pages) 
		  VALUES($[title], $[author], $[average_rating], $[number_of_pages])
		  RETURNING *
		  `, book);
	},
	update (book) {
		return db.one(`UPDATE books
		SET title=$[title], author=$[author], average_rating=$[average_rating], number_of_pages=$[number_of_pages]
		WHERE id=$[id]
		RETURNING *`, book);
	},
	delete (id) {
		return db.none('DELETE FROM books WHERE id=$1', id);
	}
}; 