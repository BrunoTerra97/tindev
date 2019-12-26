const Dev = require('./DevController');

module.exports = {
  storeLike: async (req, res) => {
    const { user } = req.headers;
    const { devId } = req.params;
    
    const actualUser = await Dev.findById(user);
    const likedUser = await Dev.findById(devId);

    // if(username === likedUser) return res.json({err: false});
    
    // if (devUser.likes.indexOf({user: username}) !== -1) {
    //   devUser.a
    // }
    console.log(actualUser);
    console.log(likedUser);
    return res.json({ok : true});


  },

};