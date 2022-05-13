const express = require('express');
const authRouter = new express.Router();
const authController = require('../controllers/authController');

authRouter.post('/register', authController.register);

authRouter.post('/login', authController.login);

module.exports = authRouter;