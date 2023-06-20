const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', async (req, res) => {
    if (req.session.logged_in) {
      res.redirect('');
      return;
    }
  
    res.render('login');
  });


  router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const user = await User.findOne({ where: { email } });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
        req.session.logged_in = true;
        req.session.user_id = user.id;
        
        return res.redirect('');
      } else {
        return res.status(401).json({ message: 'Incorrect password' });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Server error' });
    }
  });


module.exports = router;
