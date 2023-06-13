const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { timeStamp } = require('console');

class Playlists extends Model{}

Playlists.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        playlistName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references:{
                model: 'user',
                key: 'id',
            }

        },
        songs: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'songs',
                key: 'id',
            }
        },

    },
    {
        sequelize,
        timestamps: false,
        modelName: 'Playlist'
      }
)





module.exports = Playlists;