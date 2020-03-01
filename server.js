const express = require('express');



const server = express();

server.use(express.json());


server.get('/', (req, res) => {
    res.send('<p>Hi Josh</p>')
})

module.exports = server;