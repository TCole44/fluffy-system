const { Songs } = require('../models')

const songData = [
        {
          "artist": "Bad Bunny",
          "song": "Un Verano Sin Ti",
          "album": "Un Verano Sin Ti",
          "genre": "Pop"
        },
        {
          "artist": "Bad Bunny",
          "song": "Moscow Mule",
          "album": "Un Verano Sin Ti",
          "genre": "Pop"
        },
        {
          "artist": "Bad Bunny",
          "song": "Me Porto Bonito",
          "album": "Un Verano Sin Ti",
          "genre": "Pop"
        },
        {
          "artist": "Outkast",
          "song": "Flip Flop Rock (Feat. Killer Mike & JAY Z)",
          "album": "Speakerboxxx/ The Love Below",
          "genre": "Hiphop/Rap"
        },
        {
          "artist": "Mac Miller",
          "song": "2009 ",
          "album": "Swimming",
          "genre": "Hiphop/Rap"
        },
        {
          "artist": "Jorja Smith",
          "song": "Let Me Down(Feat. Stormzy)",
          "album": "Let Me Down - Single",
          "genre": "Pop"
        },
        {
          "artist": "21 Savage",
          "song": "Glock in My Lap",
          "album": "Savage Mode 2",
          "genre": "Hiphop/Rap"
        },
        {
          "artist": "Baby Keem",
          "song": "family ties(with Kendrick Lamar",
          "album": "The Melodic Blue",
          "genre": "Hiphop/Rap"
        }
        {
          "artist": "Lil Wayne",
          "song": "Receipt",
          "album": "Carter II",
          "genre": "Hiphop/Rap"
        },
]

const seedSongs = () => Songs.bulkCreate(songData);

module.exports = seedSongs;
