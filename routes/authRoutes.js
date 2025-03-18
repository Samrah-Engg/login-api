const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware'); // Import the middleware

router.post('/login', login);

// GET /api/auth/profile (protected route)
router.get('/profile', authMiddleware, (req, res) => {
    // Return the user ID from the request object
    res.json({ userId: req.userId });
  });
  

module.exports = router;