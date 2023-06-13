const router = require('express').Router();
const { Playlists, Songs } = require('../models')


// GET all galleries for homepage
router.get('/', (req, res) => {
  res.render('homepage');
});


module.exports = router;
