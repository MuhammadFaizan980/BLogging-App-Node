const express = require('express');
const imageRouter = express.Router();
const { getImage } = require('../utils/fsUtils');

imageRouter.get('/:id', (req, res) => {
    res.contentType('image/png');
    res.send(getImage(req.params.id));
});

module.exports = imageRouter;