const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
  console.log("hi")
    if (req.session.logged_in) {
      res.redirect('');
      return;
    }
  
    res.render('login');
  });


  router.post('/login', async (req, res) => {
    try {
      console.log('Login POST request received');
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        console.log('User not found');
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      console.log('User found:', userData);
      const validPassword = await bcrypt.compare(req.body.password, userData.password);
  
      if (!validPassword) {
        console.log('Invalid password');
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      console.log('Login successful');
      res.json({ user: userData, message: 'You are now logged in!' });
    } catch (err) {
      console.log('Error:', err);
      res.status(400).json(err);
    }
  });

module.exports = router;
