const express=require("express");
const router=express.Router();
const Skill=require("../models/Skill");
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

module.exports=router;