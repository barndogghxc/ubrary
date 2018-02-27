module.exports = {
   showBooks (req, res) {
     res.render('books/index')
	},
	showBook (req, res) {
	  console.log(res.locals)
	  res.render('books/showBook')
	},
	newBook (req, res) {
	  res.render('books/newBook')
	},
	redirectToBook (req, res) {
	  res.redirect(`/books`)
	},
	editBook (req, res) {
	  console.log(res.locals.book)
	  res.render('books/editBook')
	}
};