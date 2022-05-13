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

module.exports = { updateUserImage };