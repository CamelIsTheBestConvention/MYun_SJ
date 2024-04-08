const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
class Post extends Model {}

Post.init({
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    likeCnt: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    newDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updateDate: DataTypes.DATE
}, {
    sequelize,
    modelName: 'post'
});

module.exports = Post;