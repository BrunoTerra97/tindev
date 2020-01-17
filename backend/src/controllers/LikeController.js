const Dev = require('../models/Dev');

module.exports = {
  storeLike: async (req, res) => {
    const { user } = req.headers;
    const { devId } = req.params;
    
    const actualUser = await Dev.findById(user);
    const likedUser = await Dev.findById(devId);

    if(!likedUser) return res.status(400).json({error: 'Dev not exists.'});

    if(actualUser._id === likedUser._id) return res.json({err: false});
    
    if(actualUser.likes.includes(likedUser._id)) return console.log("It is a match!!!");
    
    actualUser.likes.push(likedUser._id);

    await actualUser.save();

    return res.json({ ok: true });
  },

};
