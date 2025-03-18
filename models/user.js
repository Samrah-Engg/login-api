const { DataTypes } = require('sequelize');
//const sequelize = require('../config/config.js').development;
const sequelize = require('../config/db'); // Import the initialized Sequelize instance


const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User;