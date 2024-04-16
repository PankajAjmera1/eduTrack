import { User } from "../models/user.model.js"; // Adjust the path as necessary
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const userController = {
  // Register a new user
  registerUser: asyncHandler(async (req, res) => {
    const { username, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new ApiError(400, "User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role
    });

    res.status(201).json(new ApiResponse(201, { user }, "User created successfully"));
  }),

  // Login User
  loginUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      throw new ApiError(400, "User does not exist");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new ApiError(400, "Invalid credentials");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json(new ApiResponse(200, { token }, "User logged in successfully"));
  }),

  // Fetch user details
  getUserDetails: asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    res.status(200).json(new ApiResponse(200, user, "User details fetched successfully"));
  }),

  // Update user information
  updateUser: asyncHandler(async (req, res) => {
    const { username, email, role } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { username, email, role }, { new: true });
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    res.status(200).json(new ApiResponse(200, user, "User updated successfully"));
  }),

  // Delete a user
  deleteUser: asyncHandler(async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new ApiError(404, "User not found");
    }
    res.status(200).json(new ApiResponse(200, {}, "User deleted successfully"));
  })
};

export default userController;