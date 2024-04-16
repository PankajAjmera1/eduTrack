import express from 'express';
import userController from '../controllers/user.controllers.js';

const router = express.Router();

// Register a new user
router.post('/register', userController.registerUser);

// Login user
router.post('/login', userController.loginUser);

// Fetch user details
router.get('/:id', userController.getUserDetails);

// Update user information
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

export default router;