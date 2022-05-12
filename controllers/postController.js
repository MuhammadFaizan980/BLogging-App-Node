const { getGeneralResponse } = require('../utils/responseUtils');
const Post = require('../models/post');
const fsUtils = require('../utils/fsUtils');

const createPost = async (req, res) => {
    try {
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
        });
        const response = await post.save();
        fsUtils.savePng(req.body.image, response.id);

        res.send(getGeneralResponse(response, 'Post created successfully', true));
    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, 'Could not add post', false));
    }
}

module.exports = { createPost };