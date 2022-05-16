var admin = require("firebase-admin");

var serviceAccount = require('../demo.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://test-708df.firebaseio.com"
})

module.exports.admin = admin