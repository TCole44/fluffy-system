const { Playlists } = require('../models')

const playlistData = [
    {
        
    }
];

const seedPlaylists = () => Playlists.bulkCreate(playlistData)

module.exports = seedPlaylists;