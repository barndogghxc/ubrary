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

	showFavBooks (req, res) {
     res.render('faves/favIndex', {
     	data: res.locals.favs,
     });
	},
	showOneFav (req, res) {
	  res.render('faves/showFav', {
	  	data: res.locals.fav,
	  });
	},
	showEditFavBook (req, res) {
	  res.render('faves/editFavBook', {
	  	data: res.locals.fav,
	  });
	},
	handleFavCreate(req, res) {
      res.redirect('/faves');
	},
	handleFavUpdate(req, res) {
	  res.redirect(`/faves/${req.params.id}`);
	},

	showReadBooks (req, res) {
     res.render('reads/readIndex', {
     	data: res.locals.reads,
     });
	},
	showReadOne (req, res) {
	  res.render('reads/showRead', {
	  	data: res.locals.read,
	  });
	},
	showEditReadBook (req, res) {
	  res.render('reads/editRead', {
	  	data: res.locals.read,
	  });
	},
	handleReadUpdate(req, res) {
	  res.redirect(`/read/${req.params.id}`);
	},
};

