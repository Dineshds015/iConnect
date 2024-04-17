const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import User model
const { getToken } = require('./helpers'); // Import verifyToken function from helper.js
const express = require('express');
const router=express.Router();

const existingUser = async (token) => {
    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        const userId = decoded.identifier;
        const user = await User.findById(userId); // Await the result

        return user; // Return the user document
    } catch (error) {
        console.error('Error finding user:', error);
        return null; // Return null if there's an error
    }
};

module.exports = existingUser;