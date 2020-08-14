const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('hola soy la raíz');   
});

module.exports = router;