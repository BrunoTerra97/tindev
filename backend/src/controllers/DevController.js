const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {

  cadastrarDev: async (req, res) => {
    const { username } = req.body;
    console.log(username);
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const {name, avatar_url: avatar, bio} = response.data;
    console.log(name + avatar + bio);

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    console.log("\na" + dev);
    return res.json(dev);
  },

};