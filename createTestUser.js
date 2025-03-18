const bcrypt = require('bcryptjs');
const User = require('./models/user');

const createTestUser = async () => {
  const hashedPassword = await bcrypt.hash('testpassword', 10); // Hash the password
  await User.create({
    username: 'testuser',
    password: hashedPassword,
  });
  console.log('Test user created!');
};

createTestUser();