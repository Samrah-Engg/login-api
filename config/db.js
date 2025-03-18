// config/db.js
const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

// Initialize Sequelize with MySQL credentials
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // MySQL username
  process.env.DB_PASSWORD, // MySQL password
  {
    host: process.env.DB_HOST, // MySQL host (e.g., localhost)
    dialect: 'mysql', // Database dialect
  }
);

// Test the connection
sequelize.authenticate()
  .then(() => console.log('Connected to MySQL!'))
  .catch(err => console.error('Connection error:', err));

module.exports = sequelize;