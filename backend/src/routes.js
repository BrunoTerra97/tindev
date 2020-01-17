const express = require('express');
const { cadastrarDev, indexPossibleUsers } = require('./controllers/DevController');
const { storeLike } = require('./controllers/LikeController');
const { storeDislike } = require('./controllers/DislikesController');

const routes = express.Router();

routes.post('/devs', cadastrarDev);
routes.get('/devs', indexPossibleUsers);
routes.post('/devs/:devId/like', storeLike);
routes.post('/devs/:devId/dislike', storeDislike);

module.exports = routes;