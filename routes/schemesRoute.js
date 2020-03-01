const express = require('express');
const data = require('../data/db-helper');
const router = express.Router();

router.get('/',  (req, res) => {
    data.find()
    .then(response =>{
        res.status(200).json(response)
    })
})

router.get('/:id', (req, res) =>{
    const {id} = req.params;

    data.findById(id)
    .then(response => {
        if(response) {
            res.status(200).json(response)
        }else {
            res.status(404).json({message: 'Scheme Not Found!'})
        }
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

router.get('/:id/steps', (req, res) => {
    const {id} = req.params;

    data.findById(id)
    .then(response => {
        if(response){
            data.findSteps(id)
            .then(steps => {
                res.status(200).json(steps)
            })
        }else {
            res.status(404).json({message: 'Scheme not found!'})
        }
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

router.post('/', (req, res) => {

    const schemeData = req.body;
    data.add(schemeData)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const newDetails = req.body;
    data.findById(id)
    .then(response => {
        if(response){
            data.update(newDetails,id)
            .then(newScheme => {
                res.status(200).json(newScheme)
            })
        }else {
            res.status(404).json({message: "Scheme could not be found."})
        }
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    data.remove(id)
    .then(response => {
        if(response > 0) {
            res.status(204).end();
        }else {
            res.status(404).json({message: 'The Scheme could not be found'})
        }
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})


module.exports = router;
