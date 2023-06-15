const path = require('path');
const express = require('express');
// Import express-session
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helper');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up sessions
const sess = {
  secret: 'Super secret secret',
  resave: false,
  saveUninitialized: true,
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.get("/songs/:song", function (req, res) {
  console.log(req.params.model);
  for (let i = 0; i < allSongs.length; i++) {
    if (Songs[i].song.toLowerCase() === req.params.song.toLowerCase()) {
      req.session.save(() => {
        req.session.count = req.session.count + 1;
      });

      return res.render("song", Songs[i]);
    }
  }
});

app.get("/songsbyid/:id", function (req, res) {
  return res.render("song", Songs[req.params.id - 1]);
});

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
