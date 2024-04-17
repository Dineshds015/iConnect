const express=require("express");
const router=express.Router();
const Experience=require("../models/Experience");
const existingUser = require("../utils/existingUser");

//A route to create experience
router.post("/create",
    async (req,res)=>{
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);

        //2. Create the experience object
        const {companyName,position,location,startDate,endDate,description}=req.body;
        console.log(req.body);
        if(!companyName || !position){
            return res.status(402).json({err:"Invalid Details"});
        }
        const experienceObj={
            companyName,
            position,
            location,
            startDate,
            endDate,
            description,
        };
        const experience=await Experience.create(experienceObj);
        //3. Add experience to user
        user.experiences.push(experience._id);
        await user.save();
        //4. Return a response
        return res.status(200).json(experience);
});

module.exports=router;