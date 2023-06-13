const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Songs extends Model{}

Songs.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        song: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        album: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
    sequelize,
    timestamps: { 
        createdAt: false,
        updatedAt: false
      },
    modelName: 'songs',
    tableName: 'songs'
    }
);

module.exports = Songs;