const express = require('express');
const postRouter = express.Router();
const jwtUtils = require('../utils/jwtUtils');
const postController = require('../controllers/postController');

postRouter.use(jwtUtils.checkTokenVaidity);

postRouter.post('/create-post', postController.createPost);

module.exports = postRouter;