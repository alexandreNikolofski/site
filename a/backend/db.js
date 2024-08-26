const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // ou '127.0.0.1'
  port: 3306,        // Porta padrão do MySQL
  user: 'root',      // Seu usuário MySQL
  password: '0903', // Sua senha MySQL
  database: 'ale'    // Nome do banco de dados
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
});

module.exports = connection;