const axios = require('axios');
const Dev = require('../models/Dev');
module.exports = {

  indexPossibleUsers: async (req, res) => {
    const { user } = req.headers;

    const actualUser = await Dev.findById(user);

    if(!actualUser) return res.json({ error: false });

    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: actualUser.likes } },
        { _id: { $nin: actualUser.dislikes } }
      ]
    });

    return res.json(users);
  },

  cadastrarDev: async (req, res) => {
    const { username } = req.body;

    if(!username) return res.json({erro: false});
    
    const userExists = await Dev.findOne({user: username});

    if (userExists) return res.json(userExists);

    let response;
    try {
      response = await axios.get(`https://api.github.com/users/${username}`)
    } catch(err) {
      return res.json({ erro: `Can't find: ${username} on Github`,GithubError: `${err}`});
    }

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