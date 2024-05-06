const express=require("express");
const router=express.Router();
const Connection=require("../models/Connection");
const existingUser=require("../utils/existingUser");
const User = require("../models/User");
const Education=require('../models/Education');
const Experience = require("../models/Experience");
const Project = require("../models/Project");
const Skill=require('../models/Skill');


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

router.post("/removeConnection",
    async(req,res)=>{
        //verify JWT cookie to get user information
        const token=req.cookies.loginToken;
        const user=await existingUser(token);

        //Create the like object
        const connectionUserId=req.body.connectionUserId;
        const userId=user._id;
        
        if(!connectionUserId){
            return res.status(402).json({err:"Invalid Details"});
        }
        const connection = await Connection.deleteMany({
            $or: [
              { userId: userId, connectionUserId: connectionUserId },
              { userId: connectionUserId, connectionUserId: userId }
            ]
          });
        //const connection=await Connection.deleteMany({ connectionUserId: connectionUserId, userId: userId });

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

async function getUsersNotConnected(userId) {
    try {
        const connectedUsers = await Connection.distinct('userId', { connectionUserId: userId });
        const connectedToUsers = await Connection.distinct('connectionUserId', { userId });

        const usersNotConnected = await User.find({
            _id: {
                $nin: [...connectedUsers, ...connectedToUsers, userId] // excluding the user itself
            }
        });

        return usersNotConnected;
    } catch (error) {
        console.error("Error retrieving users not connected:", error);
        throw error;
    }
}

//For new Connections
router.get("/peopleYouMayKnow", async (req, res) => {
    const token = req.cookies.loginToken;
    const user = await existingUser(token);
    try {
        getUsersNotConnected(user._id)
        .then(users => {
            console.log("Users not connected:", users);
            return res.status(200).json(users);
        })
        .catch(error => {
            console.error("Error:", error);
        });
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
    getUsersNotConnected(user._id)
    .then(users => {
        console.log("Users not connected:", users);
        return res.status(200).json(users);
    })
    .catch(error => {
        console.error("Error:", error);
    });
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

//For accepted Connections
router.get("/isConnected", async (req, res) => {
    try {
        // Verify JWT cookie to get user information
        
        const token = req.cookies.loginToken;
        const user = await existingUser(token);

        const connectionUserId=req.query.connectionUserId;
        console.log("connectionUserId: ",req.query);
        const userId=user._id;
        const isConnect = await Connection.exists({ 
            $or: [
                { $and:[
                    { connectionUserId: connectionUserId },
                    { userId: userId }
                ]},
                { $and:[
                    { connectionUserId: userId },
                    { userId: connectionUserId }
                ]}
            ],
            connectionStatus: "accepted" 
        });
        console.log(isConnect?"COnnecteDUser":"notConnectED");
        return res.status(200).json(isConnect?true:false);
        

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
        
        //For education searching
        const educationDocs = await Education.find({
            $or: [
                { school: { $regex: new RegExp(searchKey, 'i') } },
                { degree: { $regex: new RegExp(searchKey, 'i') } },
                { fieldOfStudy: { $regex: new RegExp(searchKey, 'i') } }
            
            ]
        });

        //For experience searching
        const experienceDocs = await Experience.find({
            $or: [
                { companyName: { $regex: new RegExp(searchKey, 'i') } },
                { position: { $regex: new RegExp(searchKey, 'i') } }
            ]
        });

        //For project searching
        const projectDocs = await Project.find({
            $or: [
                { name: { $regex: new RegExp(searchKey, 'i') } },
                { description: { $regex: new RegExp(searchKey, 'i') } }
            ]
        });
        
        //For skill searching
        const skillDocs = await Skill.find({
            $or: [
                { name: { $regex: new RegExp(searchKey, 'i') } },
                { description: { $regex: new RegExp(searchKey, 'i') } }
            ]
        });

        // Extract IDs from documents
        const educationIds = educationDocs.map(edu => edu._id);
        const experienceIds = experienceDocs.map(exp => exp._id);
        const projectIds = projectDocs.map(proj => proj._id);
        const skillIds = skillDocs.map(skill => skill._id);

        // Find users with education IDs matching the ones found
        //const users = await User.find({ "educations": { $in: educationIds } }).populate('educations');
        const users = await User.find({
            $and: [
                { _id: { $ne: userId } }, // Exclude current user's document
                {
                    $or: [
                        { name: { $regex: new RegExp(searchKey, 'i') } },
                        { email: { $regex: new RegExp(searchKey, 'i') } },
                        { headline: { $regex: new RegExp(searchKey, 'i') } },
                        { "educations": { $in: educationIds } },
                        { "experiences": { $in: experienceIds } },
                        { "projects": { $in: projectIds } },
                        { "skills": { $in: skillIds } }
                    ]
                }
            ]
        })
        .populate('educations')
        .populate('experiences')
        .populate('projects')
        .populate('skills');

        if (!users || users.length === 0) { // Correct variable name
            return res.status(404).json({ error: 'No users found' });
        }
        
        const userData = users.map(user => user.toObject());
        console.log("USERDETAILS: ", userData);
        return res.status(200).json(userData);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});


module.exports=router;