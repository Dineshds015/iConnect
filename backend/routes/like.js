const express=require("express");
const router=express.Router();
const Like=require("../models/Like");
const existingUser=require("../utils/existingUser");


router.post("/create",
    async(req,res)=>{
        //verify JWT cookie to get user information
        const token=req.cookies.loginToken;
        const user=await existingUser(token);

        //Create the like object
        const {postId}=req.body;
        const userId=user._id;
        
        if(!postId){
            return res.status(402).json({err:"Invalid Details"});
        }
        const likeObj={
            postId,
            userId,
        };
        const like=await Like.create(likeObj);

        //4. Return a response
        return res.status(200).json(like);
});

module.exports=router;