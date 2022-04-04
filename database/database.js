const Sequelize = require('sequelize');

const connection = new Sequelize('blog', 'thorn', 'murtagh', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;