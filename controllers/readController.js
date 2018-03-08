const readBooksDB = require('../models/readBooksDB');

module.exports = {
  readIndex (req, res, next) {
    readBooksDB.showReadBooks()
    .then((reads) => {
      res.locals.read = read;
      next();
    })
    .catch(err => next(err));
  },
    
  getOneRead(req, res, next){
    readBooksDB.showReadBook(req.params.id)
    .then((read) => {
      res.locals.read = read;
      next();
    })
    .catch(err => next(err));
  },
}; 