const router = require('express').Router();
const { Songs } = require('../models')

router.get('/songs', async (req,res) => {
    try{const songs = await Songs.findAll();
    res.json(songs);
    }  
    
    catch (err) {
        console.log(err);
        res.status(500).json(err);
      }


})

module.exports = router;
