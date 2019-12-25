const express = require('express');
const { cadastrarDev } = require('./controllers/DevController');
const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({message: `Hello ${req.query.name}`});
});

routes.post('/set', cadastrarDev);

module.exports = routes;