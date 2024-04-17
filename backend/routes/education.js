const express=require("express");
const router=express.Router();
const Education=require("../models/Education");
const User=require("../models/User");
const existingUser = require("../utils/existingUser");

//A route to create education
router.post("/create",
    async (req,res)=>{
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);

        //2. Create the education object
        const { school, degree, startDate, endDate, description, fieldOfStudy }=req.body;
        if(!school || !degree){
            return res.status(402).json({err:"Invalid Details"});
        }
        const educationObj={
            school,
            degree,
            fieldOfStudy,
            startDate,
            endDate,
            description,
        };
        const education=await Education.create(educationObj);
        //3. Add education to user
        user.educations.push(education._id);
        await user.save();
        //4. Return a response
        return res.status(200).json(education);
});

router.get('/fetchEducation', async (req, res) => {
    try {
        // Extract token from cookies
        const token = req.cookies.loginToken;
        const userLogin = await existingUser(token); 
        const userId=userLogin._id;

        const user = await User.findById(userId).populate('educations');
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const { password, ...userData } = user.toObject();
        console.log(userData);
        return res.status(200).json(userData);

    } catch (error) {
        console.error('Error fetching user details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports=router;