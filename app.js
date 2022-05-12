const express = require('express');
const mongoose = require('mongoose');
const app = express(); // initializing the express app
app.use(express.json());
// importing routers
const authRouter = require('./routes/authRouter');
const postRouter = require('./routes/postRouter');
const profileRouter = require('./routes/userRouter');

mongoose.connect('mongodb+srv://Markhor980:123456abc@cluster0.qzjg3.mongodb.net/blog_app?retryWrites=true&w=majority')
    .then((res) => {
        // initiating the port listening
        app.listen(8080, () => {
            console.log('Listening to port 8080');
        });
    })
    .catch((errro) => {
        console.log(errro);
    }); // connecting to mongo DB

app.use('/auth', authRouter);
app.use('/post', postRouter);
app.use('/user', profileRouter);