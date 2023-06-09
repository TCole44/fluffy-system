const { Playlists } = require('../models/playlists')

const playlistData = [
    {
        
    }
];

const seedPlaylists = () => Playlists.bulkCreate(playlistData)

module.exports = seedPlaylists;