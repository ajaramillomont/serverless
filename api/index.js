const express = require('express');
const mongoose = require('mongoose');
const plates = require('./routes/plates');
const app = express();

mongoose.connect(process.env.MONGODB_URI);

//const Users = mongoose.model('User', new mongoose.Schema({ name: String }));

router.get('/',(req, res) =>{
    res.send('hola soy la raiz');
});

app.use('/api/plates', plates);

module.exports = app;