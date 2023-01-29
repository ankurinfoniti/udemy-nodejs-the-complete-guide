const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_tuts',
});

module.exports = pool.promise();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_tuts', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
