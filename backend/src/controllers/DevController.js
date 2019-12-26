const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {

  cadastrarDev: async (req, res) => {
    const { username } = req.body;

    const userExists = await Dev.find({user: username});

    if (userExists) return res.json(userExists);

    const response = await axios.get(`https://api.github.com/users/${username}`);
    const {name, avatar_url: avatar, bio} = response.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    return res.json(dev);
  }

};