const express = require('express');
const imageRouter = express.Router();
const { getImage } = require('../utils/fsUtils');
const { checkTokenVaidity } = require('../utils/jwtUtils');

imageRouter.use(checkTokenVaidity);

imageRouter.get('/:id', (req, res) => {
    res.contentType('image/png');
    res.send(getImage(req.params.id));
});

module.exports = imageRouter;