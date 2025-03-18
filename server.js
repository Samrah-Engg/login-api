const app = require('./app');
const sequelize = require('./config/db'); // Import Sequelize instance
const User = require('./models/user');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


User.sync({ force: true }).then(() => {
  console.log('User table created successfully!');
});