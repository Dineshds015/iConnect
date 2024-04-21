const express=require("express");
const router=express.Router();
const Comment=require("../models/Comment");
const existingUser=require("../utils/existingUser");

router.post("/create",async(req,res)=>{
    const token=req.cookies.loginToken;
    const user=await existingUser(token);

    const {postId,content}=req.body;
    const commentDate=new Date();
    const userId=user._id;

    if(!postId || !content){
        return res.status(402).json({err:"Invalid Details"});
    }

    const commentObj={
        postId,
        userId,
        content,
        commentDate
    };
    const comment=await Comment.create(commentObj);

    return res.status(200).json(comment);
});

module.exports=router;