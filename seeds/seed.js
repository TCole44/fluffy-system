const sequelize = require('../config/connection');
const seedSongs = require('./songData');
const seedPlaylists = require('./playlistData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedSongs();

  await seedPlaylists();

  process.exit(0);
};

seedAll();
