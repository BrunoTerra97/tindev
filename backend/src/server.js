const express = require('express');
const server = express();

server.get('/', (req, res) => {

  return res.send(`HELLO ${req.query.name}`);
});

server.listen(3333);