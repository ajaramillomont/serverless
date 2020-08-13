const express = require('express');
const app = express();

app.get('*', (req, res) => {
    console.log('Hola mundo! mi primera aplicación serverless');
    res.send({mensaje: 'Chanchito feliz'});
})