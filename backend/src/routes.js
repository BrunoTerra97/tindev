const express = require('express');
const { cadastrarDev } = require('./controllers/DevController');
const { storeLike } = require('./controllers/LikeController');
const routes = express.Router();

routes.post('/devs', cadastrarDev);
routes.post('/devs/:devId/like', storeLike);

module.exports = routes;