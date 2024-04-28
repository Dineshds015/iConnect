const express=require("express");
const router=express.Router();
const Like=require("../models/Like");
const existingUser=require("../utils/existingUser");


router.post("/manageLike",
    async(req,res)=>{
        //verify JWT cookie to get user information
        const token=req.cookies.loginToken;
        const user=await existingUser(token);
        const userId=user._id;
        //Create the like object
        const {postId,status}=req.body;
        
        if(!postId){
            return res.status(402).json({err:"Invalid Details"});
        }
        
        if(status){
            const likeObj={
                postId,
                userId,
            };
            const like=await Like.create(likeObj);
            return res.status(200).json("Liked");
        }
        else{
            const connection=await Like.deleteOne({ postId: postId, userId: userId });
            return res.status(200).json("DisLiked");
        }
});

router.get('/fetchLike', async (req, res) => {
    try {
        // Extract token from cookies
        const token = req.cookies.loginToken;
        const userLogin = await existingUser(token); 
        const userId=userLogin._id;
        const postId=req.query.postId;
        const allLikes = await Like.find({ postId: postId, userId: userId});

        console.log("likess: ",allLikes);
        if (allLikes.length === 0) {
            return res.status(200).json('false');
        }
        else{
            return res.status(200).json('true');
        }

    } catch (error) {
        console.error('Error fetching like details:', error);
        return res.status(500).json({ error: 'Internal Server Error' });    
    }
});

module.exports=router;