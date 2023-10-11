const mysql = require('mysql2/promise');

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'product_catalog',
};

async function connectDatabase() {
  return await mysql.createConnection(dbConfig);
}

module.exports = { connectDatabase };
