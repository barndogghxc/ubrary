module.exports = {
   showBooks (req, res) {
     res.render('books/index', {
     	data: res.locals.books,
     });
	},
	showOne (req, res) {
	  res.render('books/showBook', {
	  	data: res.locals.book,
	  });
	},
	showNewBook (req, res) {
	  res.render('books/newBook');
	},
	showEditBook (req, res) {
	  res.render('books/editBook', {
	  	data: res.locals.book,
	  });
	},
	handleCreate(req, res) {
      res.redirect('/books');
	},
	handleUpdate(req, res) {
	  res.redirect(`/books/${req.params.id}`);
	},
	handleDelete(req, res) {
	  res.redirect('/books');
	},
};

