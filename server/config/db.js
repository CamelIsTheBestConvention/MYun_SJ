const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
    host: 'your_database_host',
    dialect: 'mysql'
});

module.exports = sequelize;