const router = require('express').Router();
const songRoutes = require('./songRoutes');
const playlistRoutes = require('./playlistRoutes')
const userRoutes = require('./userRoutes')

router.use('/songs', songRoutes);
router.use('/playlists', playlistRoutes)
router.use('/login', userRoutes)
router.use('/register', userRoutes)

module.exports = router;
