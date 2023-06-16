const router = require('express').Router();
const songRoutes = require('./songRoutes');
const playlistRoutes = require('./playlistRoutes')

router.use('/songs', songRoutes);
router.use('/playlists', playlistRoutes)

module.exports = router;
