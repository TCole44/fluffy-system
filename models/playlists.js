const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Playlists extends Model{}

Playlists.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        PlaylistName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        User: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        Songs: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        modelName: 'Playlists'
    }
)





module.exports = Playlists;