const router = require('express').Router();
const { User } = require('../../models');
const bcrypt = require('bcrypt');

router.get('/', (req, res) => {
  res.render('register');
});

router.post('/', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(req.body);

    await User.create({ name, email, password: hashedPassword });


    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred during registration' });
  }
});

module.exports = router;
