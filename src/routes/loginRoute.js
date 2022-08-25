const express = require('express');
const auth = require('../middlewares/auth');
const loginController = require('../controllers/loginController');

const loginRouter = express.Router();

loginRouter.post('/', auth.loginAuth, loginController.login);

module.exports = loginRouter;
