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


module.exports = router;