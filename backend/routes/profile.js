// const jwt = require('jsonwebtoken');
// const User = require('../models/User'); // Import User model
// const { getToken } = require('../utils/helpers'); // Import verifyToken function from helper.js
const existingUser=require('../utils/existingUser');
const express = require('express');
const router=express.Router();

router.get('/details', async (req, res) => {
    try {
        // Extract token from cookies
        const token = req.cookies.loginToken;
        const user = await existingUser(token); 

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return user details
        const { password, ...userData } = user.toObject();
        return res.status(200).json(userData);
    } catch (error) {
        console.error('Error fetching user details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/updateImages', async(req, res) => {
    try {
        const token = req.cookies.loginToken;
        const user = await existingUser(token);
        user.image = req.body.img;
        console.log("img: ",req.body.img);
        await user.save();
        return res.status(200).json({ message: "image updated successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
});


module.exports=router;