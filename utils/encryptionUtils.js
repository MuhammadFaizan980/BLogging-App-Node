var bcrypt = require('bcryptjs');

const encryptString = (data) => {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(data, salt);
    return hash;
}

const checkPasswordValidity = (enteredPassword, passHash) => {
    return bcrypt.compareSync(enteredPassword, passHash);
}

module.exports = { encryptString, checkPasswordValidity };