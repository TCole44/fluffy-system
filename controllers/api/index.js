const router = require('express').Router();
const songRoutes = require('./songRoutes');
const playlistRoutes = require('./playlistRoutes')
const userRoutes = require('./userRoutes')
const registerRoutes = require('./registerRoutes')

router.use('/songs', songRoutes);
router.use('/playlists', playlistRoutes)
router.use('/login', userRoutes)
router.use('/register', registerRoutes)

module.exports = router;
