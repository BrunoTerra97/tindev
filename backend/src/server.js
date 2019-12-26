const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const server = express();

mongoose.connect(
  'mongodb+srv://admin:admin@cluster0-66aqa.mongodb.net/tindev?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
);
server.use(express.json());
server.use(routes);
server.listen(3333);