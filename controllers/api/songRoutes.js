const router = require('express').Router();
const { start } = require('repl');
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

router.get("/songs/", function (req, res) {
  console.log(req.params.id);
  for (let i = 0; i < Songs.length; i++) {
    if (songs[i].model.toLowerCase() === req.params.id.toLowerCase()) {
      req.session.save(() => {
        req.session.lastSong = req.params.id;
        req.session.count = req.session.count + 1;
      });

      return res.render("song", Songs[i]);
    }
  }
});
module.exports = router;
