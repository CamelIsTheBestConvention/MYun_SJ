const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class User extends Model {}

User.init({
    email: DataTypes.STRING,
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    pw: DataTypes.STRING,
    newDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updateDate: DataTypes.DATE
}, {
    sequelize,
    modelName: 'user'
});

module.exports = User;