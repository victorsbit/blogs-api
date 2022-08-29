const express = require('express');
const auth = require('../middlewares/auth');
const categoryController = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/', auth.validateToken, categoryController.create);
categoryRouter.get('/', auth.validateToken, categoryController.getAll);

module.exports = categoryRouter;
