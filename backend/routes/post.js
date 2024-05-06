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
        const { content, images, postType}=req.body;
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
            postType
        };
        const post=await Post.create(postObj);
        //4. Return a response
        return res.status(200).json(post);
});

router.get('/fetchPost', async (req, res) => {
    try {
        // Extract token from cookies
        const token = req.cookies.loginToken;
        const userLogin = await existingUser(token); 
        const userId=userLogin._id;
        const postType=req.query.postType;
        const uId=req.query.userId

        //const allPosts = await Post.find({ userId: { $ne: userId },postType:postType }).populate('userId');
        
        const allPosts = postType 
            ?await Post.find({postType:postType }).populate('userId')
            :await Post.find({userId:uId}).populate('userId');
        if (allPosts.length === 0) {
            return res.status(404).json({ error: 'No posts found' });
        }

        const postData = allPosts.map(post => post.toObject());
        console.log(postData);
        return res.status(200).json(postData);

    } catch (error) {
        console.error('Error fetching post details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });    
    }
});


module.exports=router;