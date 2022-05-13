const express = require('express');
const userRouter = express.Router();
const jwtUtils = require('../utils/jwtUtils');
const userController = require('../controllers/userController');

//temprary imports
const User = require('../models/user');
const { savePng } = require('../utils/fsUtils');
const { getGeneralResponse } = require('../utils/responseUtils');

userRouter.use(jwtUtils.checkTokenVaidity);

userRouter.post('/update-image', userController.updateUserImage);

userRouter.post('/update-user-name', userController.updateUserName);

module.exports = userRouter;