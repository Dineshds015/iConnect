const express=require("express");
const router=express.Router();
const Connection=require("../models/Connection");
const existingUser=require("../utils/existingUser");
const User = require("../models/User");


router.post("/create",
    async(req,res)=>{
        //verify JWT cookie to get user information
        const token=req.cookies.loginToken;
        const user=await existingUser(token);

        //Create the like object
        const {connectionUserId}=req.body;
        const userId=user._id;
        const connectionStatus="pending";
        if(!connectionUserId){
            return res.status(402).json({err:"Invalid Details"});
        }
        const connectionObj={
            userId,
            connectionUserId,
            connectionStatus
        };
        const connection=await Connection.create(connectionObj);

        //4. Return a response
        return res.status(200).json(connection);
});

//For cancel the request

router.post("/cancel",
    async(req,res)=>{
        //verify JWT cookie to get user information
        const token=req.cookies.loginToken;
        const user=await existingUser(token);

        //Create the like object
        const {connectionUserId}=req.body;
        const userId=user._id;
        
        if(!connectionUserId){
            return res.status(402).json({err:"Invalid Details"});
        }
        const connection=await Connection.deleteMany({ connectionUserId: connectionUserId, userId: userId });

        //4. Return a response
        return res.status(200).json(connection);
});

router.post("/accept",
    async(req,res)=>{
        //verify JWT cookie to get user information
        const token=req.cookies.loginToken;
        const user=await existingUser(token);

        //Create the like object
        const {connectionUserId}=req.body;
        const userId=user._id;
        
        const connection=await Connection.updateOne({ connectionUserId: userId, userId: connectionUserId }, { $set: { connectionStatus: 'accepted' }});
        
        //4. Return a response
        return res.status(200).json(connection);
});


//For new Connections
router.get("/peopleYouMayKnow", async (req, res) => {
    try {
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);

        const allUsers = await User.find({ _id: { $ne: user._id } });
        
        if (!allUsers || allUsers.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }

        const userData = allUsers.map(user => {
            const { password, ...userData } = user.toObject();
            return userData;
        });

        return res.status(200).json(userData);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


//For new Connections
router.get("/conRequest", async (req, res) => {
    try {
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);

        const {connectionUserId}=req.body;
        const userId=user._id;

        const allRequest = await Connection.find({ 
            connectionUserId: userId,
            connectionStatus: "pending" 
        }).populate('userId');
        if (!allRequest || allRequest.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }
        console.log(allRequest);

        const userData = allRequest.map(connection => {
            const { userId, ...userData } = connection.userId.toObject(); // Extract user information from populated field
            return userData;
        });
        return res.status(200).json(userData);

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

//For accepted Connections
router.get("/myConnection", async (req, res) => {
    try {
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);

        const {connectionUserId}=req.body;
        const userId=user._id;

        const allRequest = await Connection.find({ 
            $or: [
                { connectionUserId: userId },
                { userId: userId }
            ],
            connectionStatus: "accepted" 
        }).populate('userId');
        if (!allRequest || allRequest.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }
        console.log(allRequest);

        const userData = allRequest.map(connection => {
            const { userId, ...userData } = connection.userId.toObject(); // Extract user information from populated field
            return userData;
        });
        return res.status(200).json(userData);

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports=router;