const express = require('express');
const mongoose = require('mongoose');
const plates = require('./routes/plates');
const orders = require('./routes/orders');
const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true});

const router = express.Router();

app.use('/api/plates', plates);
app.use('/api/plates', orders);

module.exports = app;