const express=require("express");
const router=express.Router();
const Project=require("../models/Project");
const User=require("../models/User");
const existingUser = require("../utils/existingUser");

router.post(
    "/create",
    async (req,res)=>{
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);
        //Create project object
        const {name,description,links}=req.body;
        if(!name){
            return res.status(402).json({err:"Invalid details"});
        }
        const projectObj={
            name,
            description
        }
        const project=await Project.create(projectObj);

        //add project to user
        user.projects.push(project._id);
        await user.save();

        //return a result to user
        return res.status(200).json(project);
    }
);

router.get('/fetchProject', async (req, res) => {
    try {
        // Extract token from cookies
        const token = req.cookies.loginToken;
        const userLogin = await existingUser(token); 
        const userId=userLogin._id;

        const user = await User.findById(userId).populate('projects');
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