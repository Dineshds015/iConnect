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
    const token = req.cookies.loginToken;
    const user = await existingUser(token);
    try {
        User.aggregate([
            // Lookup to find all users who are in connections
            {
                $lookup: {
                    from: "connections",
                    localField: "_id",
                    foreignField: "userId",
                    as: "connections"
                }
            },
            // Match users who do not have any connections
            {
                $match: {
                    connections: { $size: 0 },
                    _id: { $ne: user._id }
                }
            }
        ]).exec()
        .then(allUsers => {
            if (!allUsers || allUsers.length === 0) {
                return res.status(404).json({ error: 'No users found' });
            }
            const userData = allUsers.map(user => {
                const { password, ...userData } = user; // Extract user information from populated field
                return userData;
            });
            console.log("userData:", userData);
            return res.status(200).json(userData);
        })
        .catch(err => {
            console.error('Error:', err);
            return res.status(500).json({ error: 'Internal Server Error' });
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


//For Connection Manage (Request, Sent)
router.get("/conManage", async (req, res) => {
    try {
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);
        const panel=req.query.panel;
        const {connectionUserId}=req.body;
        const userId=user._id;
        if(panel==="request")
        {
            const uData = await Connection.find({ 
                connectionUserId: userId,
                connectionStatus: "pending" 
            }).populate('userId')
            if (!uData || uData.length === 0) {
                return res.status(404).json({ error: 'No users found' });
            }
            const userData = uData.map(connection => {
                const {...userData } = connection.userId.toObject();
                return userData;
            });
            return res.status(200).json(userData);
        }
        else{
            const uData = await Connection.find({ 
                userId: userId,
                connectionStatus: "pending" 
            }).populate('connectionUserId');
            if (!uData || uData.length === 0) {
                return res.status(404).json({ error: 'No users found' });
            }
            const userData = uData.map(connection => {
                const {...userData } = connection.connectionUserId.toObject();
                return userData;
            });
            return res.status(200).json(userData);
        }
        

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

        })
        .populate('userId')
        .populate('connectionUserId');
        if (!allRequest || allRequest.length === 0) {
            return res.status(404).json({ error: 'No users found' });
        }
        
        const userData = allRequest.map(connection => {
            const { ...userData } = connection.userId._id.equals(user._id) ? connection.connectionUserId.toObject():connection.userId.toObject();
            return userData;
        });
        return res.status(200).json(userData);
        

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get("/search", async (req, res) => {
    try {
        // Verify JWT cookie to get user information
        const token = req.cookies.loginToken;
        const user = await existingUser(token);
        const searchKey = req.query.search; // Correct variable name
        const userId = user._id;

        const users = await User.find({
            $and: [
                { _id: { $ne: userId } }, // Exclude current user's document
                {
                    $or: [
                        { name: { $regex: searchKey, $options: 'i' } },
                        { email: { $regex: searchKey, $options: 'i' } },
                        { headline: { $regex: searchKey, $options: 'i' } },
                        { 'educations.school': { $regex: searchKey, $options: 'i' } },
                        { 'educations.degree': { $regex: searchKey, $options: 'i' } },
                        { 'experiences.companyName': { $regex: searchKey, $options: 'i' } },
                        { 'experiences.position': { $regex: searchKey, $options: 'i' } },
                        { 'projects.name': { $regex: searchKey, $options: 'i' } },
                        { 'projects.description': { $regex: searchKey, $options: 'i' } },
                        { 'skills.skillName': { $regex: searchKey, $options: 'i' } }
                        // Add more fields here as needed
                    ]
                }
            ]
        });

        if (!users || users.length === 0) { // Correct variable name
            return res.status(404).json({ error: 'No users found' });
        }
        
        const userData = users.map(user => user.toObject());
        console.log("USERDETAILS: ",userData);
        return res.status(200).json(userData);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports=router;