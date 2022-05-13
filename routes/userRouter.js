const express = require('express');
const userRouter = express.Router();
const jwtUtils = require('../utils/jwtUtils');
const userController = require('../controllers/userController');

userRouter.use(jwtUtils.checkTokenVaidity);

userRouter.post('/update-image', userController.updateUserImage);

userRouter.post('/update-user-name', userController.updateUserName);

userRouter.get('/me', userController.getUserInfo);

module.exports = userRouter;