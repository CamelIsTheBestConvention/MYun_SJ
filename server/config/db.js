require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '+09:00'
});

sequelize.authenticate()
    .then(() => console.log('연결이 성공적으로 설정되었습니다.'))
    .catch(err => console.error('데이터베이스에 연결할 수 없습니다.:', err));

module.exports = sequelize;
