const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');
const { Playlists, Songs } = require('../models')



router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;
