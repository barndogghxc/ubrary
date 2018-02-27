// const favBooksDB = require('../models/favBooksDB');

// module.exports = {
// 	index (req, res) {
// 		favBooksDB.findAll()
// 		.then(results => {
// 			res.json({
// 				message: 'ok',
// 				data: results
// 			})
// 		})
// 		.catch(err => {
// 			res.status(500).json({
// 				message: 'error',
// 				error: err
// 			})
// 		})
// 	},

// 	create(req, res){
// 	  favBooksDB.save(req.body)
// 	  .then(result => {
//       	res.json({
//           message: 'ok',
//           data: result
//         })
//       })
//       .catch(err => {
//       	res.status(500).json({
//           message: 'Error',
//           error: err
//       	})
//       })
// 	},

// 	getOne(req, res){
// 	  favBooksDB.findOne(req.params.id)
// 	  .then(result => {
//         res.json({
//          message: 'ok',
//          data: result
//         })
//       })
//       .catch(err => {
//         res.status(500).json({
//           message: 'error',
//           error: err
//         })
//       })
// 	},

// 	update(req, res){
// 	  favBooksDB.update(req.body)
// 	  .then(result => {
//         res.json({
//           message: 'ok',
//           data: result
//         })
//       })
//       .catch(err => {
//         res.status(500).json({
//           message: 'error',
//           error: err
//         })
//       })
// 	},

// 	delete(req, res){
//       favBooksDB.destroy
//       .then(() => {
//         res.json({
//           message: 'ok'
//         })
//       })
//       .catch(err => {
//         res.status(500).json({
//           message: 'error',
//           error: err
//         })
//       })
// 	}
// }; 
