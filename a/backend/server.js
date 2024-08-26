const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Configuração da conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '0903',
  database: 'ale'
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');
  
  // Criar a tabela de usuários se não existir
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL
    )
  `;
  
  connection.query(createTableQuery, (error, results) => {
    if (error) {
      console.error('Error creating table:', error);
      return;
    }
    console.log('Users table is ready.');
  });
});

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Endpoint para registro de usuários
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  
  // Inserir novo usuário no banco de dados
  const insertQuery = 'INSERT INTO users (username, password) VALUES (?, ?)';
  connection.query(insertQuery, [username, password], (error, results) => {
    if (error) {
      console.error('Error inserting user:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(201).json({ message: 'User registered successfully' });
    }
  });
});

// Endpoint para login de usuários
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
    if (error) {
      console.error('Error querying the database:', error);
      res.status(500).json({ message: 'Internal server error' });
    } else if (results.length > 0) {
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = connection;