const jwt = require('jsonwebtoken');


const appendJwt = (data, id) => {
    const token = jwt.sign({
        data: id,
    }, id, { expiresIn: '365days' });

    return { ...data._doc, jwt: token };
}

module.exports = { appendJwt };