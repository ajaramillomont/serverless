const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('hola soy meals')   
});

router.get('/:id', (req, res) =>{
    res.send(req.params.id)   
});

router.post('/', (req, res) =>{
    res.send('soy post')   
});

router.put('/', (req, res) =>{
    res.send('hola soy meals')   
});

router.delete('/:id', (req, res) =>{
    res.send('soy delete')   
});
module.exports = router;