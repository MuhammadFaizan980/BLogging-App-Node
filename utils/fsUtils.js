const fs = require('fs');

const getImage = (id) => {
    return fs.readFileSync(`./images/${id}.png`);
}

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

const deletePng = (id) => {
    fs.unlinkSync(`./images/${id}.png`);
}

module.exports = { savePng, createDirectory, getImage, deletePng };