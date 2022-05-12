const User = require('../models/user');
const encryptionUtils = require('../utils/encryptionUtils');
const { appendJwt } = require('../utils/jwtUtils');
const { getGeneralResponse } = require('../utils/responseUtils');

const register = async (req, res) => {

    try {
        await User.init();
        const response = await new User({
            name: req.body.name,
            email: req.body.email,
            password: encryptionUtils.encryptString(req.body.password),
        }).save();

        res.send(getGeneralResponse(appendJwt(response, response.id), 'Registration successful', true));
    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, 'Email might already be taken, please try another one', false));
    }
};

const login = async (req, res) => {
    try {
        const response = await User.find({ email: req.body.email });
        const configuredObject = getGeneralResponse(response.length == 0 ? null : appendJwt(response[0], response[0].id),
            response.length == 0 ? 'Invalid email' : 'Login success', response.length != 0);

        if (configuredObject.success) {
            const isValidPassword = encryptionUtils.checkPasswordValidity(req.body.password, configuredObject.data.password);
            if (isValidPassword) {
                res.send(configuredObject);
            } else {
                res.send(getGeneralResponse(null, 'Invalid password', false));
            }
        } else {
            res.send(configuredObject);
        }

    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, e.message, false));
    }
};

module.exports = { register, login };