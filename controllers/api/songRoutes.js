const router = require('express').Router();
const { Songs } = require('../../models');

router.get('/', async (req,res) => {
    try{const songs = await Songs.findAll();
    res.json(songs);
    }  
    
    catch (err) {
        console.log(err);
        res.status(500).json(err);
      }


})

app.get("/songs/:model", function (req, res) {
  console.log(req.params.model);
  for (let i = 0; i < songs.length; i++) {
    if (songs[i].model.toLowerCase() === req.params.model.toLowerCase()) {
      req.session.save(() => {
        req.session.lastSong = req.params.model;
        req.session.count = req.session.count + 1;
      });

      return res.render("song", songs[i]);
    }
  }
});
module.exports = router;
