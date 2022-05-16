const express = require('express');
const firebaseRouter = express.Router();
const { getGeneralResponse } = require('../utils/responseUtils');
const { admin } = require('../utils/firebaseUtils');

const notification_options = {
    priority: "high",
    timeToLive: 60 * 60 * 24
};

firebaseRouter.post('/send-notification', async (req, res) => {
    const registrationToken = req.body.registrationToken
    const message = req.body.message
    const options = notification_options

    try {
        await admin.messaging().sendToDevice(registrationToken, message, options);
        res.send(getGeneralResponse(null, 'Notification sent successfully!', true));

    } catch (e) {
        console.log(error);
        res.send(getGeneralResponse(null, 'Could not send notification, try again later', false));
    }
});

module.exports = firebaseRouter;