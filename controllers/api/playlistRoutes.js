const router = require('express').Router();
const { start } = require('repl');
const { Playlists } = require('../../models');

router.get('/', async (req,res) => {
    try{
    res.render('allplaylists');
    }  
    
    catch (err) {
        console.log(err);
        res.status(500).json(err);
      }


})

router.post('/remove', async (req, res) => {
  try {
    const { playlistId, songId } = req.body;

    const playlist = await Playlists.findByPk(playlistId);

    if (!playlist) {
      res.status(404).json({ message: 'Playlist not found' });
      return;
    }

    const song = await Songs.findByPk(songId);

    if (!song) {
      res.status(404).json({ message: 'Song not found' });
      return;
    }

    await playlist.removeSong(song);

    res.status(200).json({ message: 'Song removed from playlist' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;