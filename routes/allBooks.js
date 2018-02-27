const express = require('express');
const allRouter = express.Router();
const allController = require('../controllers/allController');
allRouter.get('/', allController.index);
allRouter.post('/', allController.create);
allRouter.get('/:id', allController.getOne);
allRouter.put('/:id', allController.update);
allRouter.delete('/:id', allController.delete);

module.exports = allRouter;