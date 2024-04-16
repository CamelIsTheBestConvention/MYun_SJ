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
    userNickname: {
        type: DataTypes.STRING(255),
        allowNull: false
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
    modelName: 'Post',
    timestamps: false // 타임스탬프 컬럼 비활성화
});


module.exports = Post;
