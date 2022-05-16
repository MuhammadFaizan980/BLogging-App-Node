const { getGeneralResponse } = require('../utils/responseUtils');
const User = require('../models/user');
const { savePng } = require('../utils/fsUtils');
const { decodeJwt } = require('../utils/jwtUtils');

const updateUserImage = (req, res) => {
    try {
        const userId = decodeJwt(req.headers.authorization).data;
        savePng(req.body.image, userId);
        res.send(getGeneralResponse(null, 'Image updated', true));
    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, 'Error updating user image', false));
    }
};

const updateUserName = async (req, res) => {
    try {
        const userId = decodeJwt(req.headers.authorization).data;
        const response = await User.updateOne({ _id: userId }, { name: req.body.name, });
        res.send(getGeneralResponse(response, 'User info updated', true));
    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, 'Could not update user info due to an error', false));
    }
};

const getUserInfo = async (req, res) => {
    try {
        const userId = decodeJwt(req.headers.authorization).data
        const response = await User.findOne({ _id: userId });
        res.send(getGeneralResponse(response, 'Profile data successfully fetched', true));
    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, 'An error occured fetching your details', false));
    }
};

module.exports = { updateUserImage, updateUserName, getUserInfo };