const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    category: {
        type: DataTypes.STRING(500),
        allowNull: false
    },
    fileURL: {
        type: DataTypes.STRING(500)
    },
    user_nickname: {
        type: DataTypes.STRING(500)
    },
    newDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updateDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'post',
});

module.exports = Post;
