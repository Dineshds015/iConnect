const express=require("express");
const router=express.Router();
const Education=require("../models/Education");
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

module.exports=router;