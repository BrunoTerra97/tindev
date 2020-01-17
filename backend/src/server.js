const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

mongoose.connect(
  'mongodb+srv://omnistack8:b123@cluster0-kg31k.mongodb.net/tindev?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  }
);

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);