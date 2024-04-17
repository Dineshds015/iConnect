const express=require("express");
const router=express.Router();
const Project=require("../models/Project");
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
            description,
            links
        }
        const project=await Project.create(projectObj);

        //add project to user
        user.projects.push(project._id);
        await user.save();

        //return a result to user
        return res.status(200).json(project);
    }
);

module.exports=router;