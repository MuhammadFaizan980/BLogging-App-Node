const jwt = require('jsonwebtoken');
const { getGeneralResponse } = require('../utils/responseUtils');

const checkTokenVaidity = (req, res, next) => { // for jwt verification...
    try {
        const authToken = req.headers.authorization;
        const decodedToken = decodeJwt(authToken);

        if (decodedToken == null) {
            res.send(getGeneralResponse(null, 'Not authorized', false));
        } else {
            next();
        }
    } catch (e) {
        console.log(e);
        res.send(getGeneralResponse(null, 'Authorization error', false));
    }
}

const appendJwt = (data, id) => {
    const token = jwt.sign({
        data: id,
    }, id, { expiresIn: '365days' });

    return { ...data._doc, jwt: token };
}

const decodeJwt = (token) => {
    return jwt.decode(token.replace('Bearer ', ''));
}

module.exports = { appendJwt, decodeJwt, checkTokenVaidity };