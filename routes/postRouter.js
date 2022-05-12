const express = require('express');
const postRouter = express.Router();
const jwtUtils = require('../utils/jwtUtils');
const postController = require('../controllers/postController');

//temo imports
const Post = require('../models/post');
const fsUtils = require('../utils/fsUtils');
const { getGeneralResponse } = require('../utils/responseUtils');
const jwt = require('../utils/jwtUtils');

postRouter.use(jwtUtils.checkTokenVaidity);

postRouter.post('/create-post', postController.createPost);

postRouter.get('/get-posts/:page:id', async (req, res) => {
    res.send(await Post.find());
});

module.exports = postRouter;