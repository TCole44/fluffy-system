const router = require('express').Router();
const { start } = require('repl');
const { Songs } = require('../../models');
const withAuth = require('../../utils/auth')

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
    res.render('songs',{ song: song });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
})


router.post('/', withAuth, async (req, res) => {
  try {
    const { songId } = req.body;
    const { userId } = req.session;

    // Find the user's playlist
    const playlist = await Playlist.findOne({ where: { user_id: userId } });

    if (!playlist) {
      // Create a new playlist if the user doesn't have one
      await Playlist.create({ user_id: userId });
    }

    // Add the song to the user's playlist
    await playlist.addSong(songId);

    res.status(200).json({ message: 'Song added to playlist successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to add song to playlist' });
  }
});


module.exports = router;
