const express = require('express');
const postRouter = express.Router();
const postController = require('../controllers/postController');
const jwtUtils = require('../utils/jwtUtils');

postRouter.use(jwtUtils.checkTokenVaidity);

postRouter.post('/create-post', postController.createPost);

postRouter.get('/get-posts/:page', postController.getUserPosts);

postRouter.delete('/delete/:id', postController.deletePost);

module.exports = postRouter;