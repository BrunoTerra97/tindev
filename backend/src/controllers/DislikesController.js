const Dev = require('../models/Dev');

module.exports = {
  storeDislike: async (req, res) => {
    const { user } = req.headers;
    const { devId } = req.params;
    
    const actualUser = await Dev.findById(user);
    const likedUser = await Dev.findById(devId);

    if(!likedUser) return res.status(400).json({error: 'Dev not exists.'});
    if(actualUser._id === likedUser._id) return res.json({err: false});
    if(likedUser.dislikes.includes(actualUser._id)) return res.json({err: "User is already desliked"});

    likedUser.dislikes.push(actualUser._id);

    await likedUser.save();

    return res.json({likedUser});
  },

};
