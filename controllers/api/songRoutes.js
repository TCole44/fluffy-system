const router = require('express').Router();
const { start } = require('repl');
const { Songs } = require('../../models');

router.get('/', async (req,res) => {
    try{const songs = await Songs.findAll();
    res.render('allsongs', {songs: songs});
    }  
    
    catch (err) {
        console.log(err);
        res.status(500).json(err);
      }


})

router.get('/:id', async (req, res) => {
  try {
    const song = await Songs.findByPk(req.params.id);
    if (!song) {
      return res.status(404).json({ error: 'Song not found' });
    }

    req.session.lastSong = req.params.id;
    req.session.count = (req.session.count || 0) + 1;
    
    console.log(song)
    res.render('songs',{ song:song });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

module.exports = router;
