const router = require('express').Router();
const { start } = require('repl');
const { Songs } = require('../../models');

router.get('/', async (req,res) => {
    try{const songs = await Songs.findAll();
      console.log(songs)
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
    console.log(song)
    res.render('songs',{ song: song });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})

module.exports = router;
