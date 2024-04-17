const express=require("express");
const router=express.Router();
const Skill=require("../models/Skill");
const User=require("../models/User");
const existingUser = require("../utils/existingUser");

router.post(
    "/create",
    async (req,res)=>{
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);

        //Create skill object
        const {skillName}=req.body;
        if(!skillName){
            return res.status(402).json({err:"Invalid details"});
        }
        const skillObj={
            skillName
        }
        const createdSkill=await Skill.create(skillObj);

        //add skill to user
        user.skills.push(createdSkill._id);
        await user.save();

        //return a result to user
        return res.status(200).json(createdSkill);
    }
);

router.get('/fetchSkill', async (req, res) => {
    try {
        // Extract token from cookies
        const token = req.cookies.loginToken;
        const userLogin = await existingUser(token); 
        const userId=userLogin._id;

        const user = await User.findById(userId).populate('skills');
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