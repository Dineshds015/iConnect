const express=require('express');
const User=require("../models/User");
const bcrypt=require('bcrypt');
const nodemailer=require('nodemailer');
const {getToken}=require("../utils/helpers");
const router=express.Router();
const crypto=require('crypto');
const sendMailer=require('../utils/smtp');

//Generating the alphanumeric OTP which is moreSecure
function generateOTP(){
    return crypto.randomBytes(3).toString('hex').toUpperCase();
}
let otp=generateOTP();

router.post('/checkExistingUser', async (req, res) => {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
        res.status(200).json({ message: "existingUser" });
    } else {
        res.status(200).json({ message: "notExistingUser" });
    }
});

//Starts the email verification using Etherial smtpServer
router.post('/sendOtp',async(req,res)=>{
    const existingUser=await User.findOne({email:req.body.email});
    if(existingUser){
        res.status(200).json({ message: "existingUser" });
        return;
    }
    res.status(200).json({ message: "mailing" });
    console.log("Mail Id recieved of ",req.body.email);
    const mailing=sendMailer.sendMail(req.body.email,otp);
    if(mailing )    
        console.log("Mail sent");
    console.log(otp);
})

router.post('/resendOtp', async(req, res) => {
    // Generate a new OTP
    
    otp = generateOTP();
    console.log("ResendOTP:",otp);
    // Send the new OTP to the user's email
    const mailing = sendMailer.sendMail(req.body.email, otp);
    if (mailing) {
        console.log("Mail resent");
        console.log("New OTP:", otp);
        res.status(200).json({ message: "OTP resent successfully" });
    } else {
        console.log("Failed to resend mail");
        res.status(200).json({ message: "Failed to resend OTP" });
    }
});

// POST route for OTP verification
router.post('/verify', (req, res) => {
  //const { email, otp } = req.body;
  console.log(req.body.otp," ",otp,":",req.body.otp === otp);
  // Check if OTP matches the one sent to the user
  if (req.body.otp && req.body.otp === otp) {
    return res.status(200).json({ message: "OTP verified successfully" });
  } else {
    // If OTP does not match, send error response
    return res.status(200).json({ message:"Invalid OTP"});
  }
});

router.post("/updatePass", async (req, res) => {
    try {
      const { email, newPassword } = req.body;
      console.log(newPassword);
      // Check if a user with the provided email exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
  
      // Hash the new password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Update the user's password
      user.password = hashedPassword;
      await user.save();
  
      return res.status(200).json({ message: "Password updated successfully" });
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  
router.post("/register",async(req,res)=>{
    //This is the function that will handle the register user
    //step1: Get the details from req.body
    const {name,email,password}=req.body;
    console.log(req.body);
    if(!name || !email || !password){
        return res.status(400).json({err:"Invalid request body"});
    }
    //step2: We will check if a user with that email already exists.This is not allowed
    const existingUser=await User.findOne({email:email});
    if(existingUser){
        return res.status(402).json({err:"A user with this email already exists"});
    }
    //step3: This is a legitimate user request. Now we will create the user.
    const hashedPassword=await bcrypt.hash(password, 10);
    const newUserDetails={
        name,
        password:hashedPassword,
        email,
    };
    const newUser=await User.create(newUserDetails);

    //step4: I can use the newUser to create a JWT and return the token to the user.
    const token=await getToken(email,newUser);
    //We want to return the following to the user:
    //1. The actual user created.
    //2. The token\
    const userToReturn={...newUser.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json({name});
});

router.post("/login",async(req,res)=>{
    //step1: We get the details from the req.body
    const {email,password}=req.body;

    //step2: Verify if a user exists with that email
    const user=await User.findOne({email: email});
    if(!user){
        return res.status(401).json({err:"Invalid username or password"});
    }

    //step3: Verify if the password provided by the user for login is correct.
    const isPasswordValid=await bcrypt.compare(password,user.password);
    if(!isPasswordValid){
        return res.status(401).json({err:"Invalid username or password"});
    }

    // Step 4: Generate a token for the user
    const token = await getToken(email, user);

    // Step 5: Store the token in a cookie
    const cookieOptions = {
        expires: new Date(Date.now() + 3600000), // Cookie expires in 1 hour
        httpOnly: true,
    };
    res.cookie("loginToken", token, cookieOptions);

    //step6: Generate a token for the user and return it.
    
    const userToReturn={...user.toJSON(),token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});

module.exports=router;
