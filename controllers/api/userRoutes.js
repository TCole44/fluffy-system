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


  router.post('/', async (req, res) => {
    try {
      console.log('Login POST request received');
      const userData = await User.findOne({ where: { email: req.body.email } });
  
      if (!userData) {
        console.log('User not found');
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      console.log('User found:', userData);
      console.log('Provided password:', req.body.password);
      console.log('Stored hashed password:', userData.password);
  
      const passwordMatch = await bcrypt.compare(req.body.password, userData.password);
  
      if (!passwordMatch) {
        console.log('Invalid password');
        res.status(400).json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      console.log('Login successful');
      req.session.logged_in = true;
      res.json({ok:true})
    } catch (err) {
      console.log('Error:', err);
      res.status(400).json(err);
    }
  });
  

module.exports = router;
