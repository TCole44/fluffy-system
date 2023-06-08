const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model{}

User.init(
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
    sequelize,
);

module.exports = User;