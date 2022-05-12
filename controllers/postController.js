const { getGeneralResponse } = require('../utils/responseUtils');
const Post = require('../models/post');
const { savePng, deletePng } = require('../utils/fsUtils');
const { decodeJwt } = require('../utils/jwtUtils');

const createPost = async (req, res) => {
    try {
        const userId = decodeJwt(req.headers.authorization).data;
        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            user_id: userId,
        });
        const response = await post.save();
        savePng(req.body.image, response.id);

        res.send(getGeneralResponse(response, 'Post created successfully', true));
    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, 'Could not add post', false));
    }
};

const getUserPosts = async (req, res) => {
    try {
        const page = req.params.page;
        const userId = decodeJwt(req.headers.authorization).data;
        res.send(getGeneralResponse(await Post
            .find({ user_id: userId })
            .sort({ createdAt: 'desc' })
            .limit(10)
            .skip(10 * (page - 1)), 'User posts successfully fetched', true));
    } catch (e) {
        console.log(e);
        res.send(null, 'There was some error fetching your posts, please try again later', false);
    }
};

const deletePost = async (req, res) => {
    try {
        deletePng(req.params.id);
        res.send(getGeneralResponse(await Post.deleteOne({ _id: req.params.id }), 'Post deleted', true));
    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, 'Error deleting this post', false));
    };
}

module.exports = { createPost, getUserPosts, deletePost };