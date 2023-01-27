const mysql = require('mysql2');

const pool = mysql.pool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_tuts',
});

module.exports = pool.promise();
