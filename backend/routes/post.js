const express=require("express");
const router=express.Router();
const Post=require("../models/Post");
const existingUser = require("../utils/existingUser");

//A route to create post
router.post("/create",
    async (req,res)=>{
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);

        //2. Create the post object
        const { content, images}=req.body;
        const userId=user._id;
        const postDate = new Date();
        if(!userId || !content){
            return res.status(402).json({err:"Invalid Details"});
        }
        
        const postObj={
            userId,
            content,
            images,
            postDate,
        };
        const post=await Post.create(postObj);
        //4. Return a response
        return res.status(200).json(post);
});


module.exports=router;