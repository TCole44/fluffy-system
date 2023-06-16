const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/'); // Redirect to homepage if already logged in
      return;
    }
  
    res.render('login'); // Render the login page
  });



module.exports = router;
