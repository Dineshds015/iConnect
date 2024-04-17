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

//All profile updation is done by this single function
router.post('/updateUser', async(req, res) => {
    try {
        const token = req.cookies.loginToken;
        const user = await existingUser(token);
        // Iterate through the fields in the request body and update them in the user object
        for (const field in req.body) {
            if (Object.hasOwnProperty.call(req.body, field)) {
                user[field] = req.body[field];
            }
        }
        // Save the updated user object
        await user.save();
        return res.status(200).json({ message: "image updated successfully" });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ error: "Internal server error" });
    }
});


module.exports=router;