const express = require('express');
const auth = require('../middlewares/auth');
const postController = require('../controllers/postController');

const postRouter = express.Router();

postRouter.post('/', auth.validateToken, postController.create);
postRouter.get('/', auth.validateToken, postController.getAll);

module.exports = postRouter;
