const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware'); // Middleware de autenticação

// Register a new user (POST)
router.post('/register', userController.registerUser);

// Login of an existing user (POST)
router.post('/login', userController.loginUser);

// Update User Profile (PUT) - Protected Route
router.put('/:id', authMiddleware, userController.updateUserProfile);

// Other routes can be added, such as getting profile or deleting user, for example.
// router.get('/:id', authMiddleware, userController.getUserProfile);
// router.delete('/:id', authMiddleware, userController.deleteUser);

module.exports = router;
