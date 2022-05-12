const fs = require('fs');

const savePng = (data, userId) => {
    const buffer = new Buffer.from(data, 'base64');
    createDirectory('images');
    fs.writeFileSync(`images/${userId}.png`, buffer);
}

const createDirectory = (dirName) => {
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }
}

module.exports = { savePng, createDirectory };