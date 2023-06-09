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
            allowNull: false,
        },
        User: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Songs: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
)

module.exports = Playlists;