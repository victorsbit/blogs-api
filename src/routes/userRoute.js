const express = require('express');
const auth = require('../middlewares/auth');
const userController = require('../controllers/userController');

const userRouter = express.Router();

userRouter.post('/', userController.create);
userRouter.get('/', auth.validateToken, userController.getAll);
userRouter.get('/:id', auth.validateToken, userController.getById);

module.exports = userRouter;
