const User = require('../models/User');
const Skill = require('../models/Skill');
const existingUser = require('../utils/existingUser');

const getUserSkills = async (req, res) => {
  try {
    const token = req.cookies.loginToken;
    const existUser = await existingUser(token);
    const userId=existUser._id;
    
    // Find the user by userId and populate the skills array
    const user = await User.findById(userId).populate('skills');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user.skills);
  } catch (error) {
    console.error('Error fetching user skills:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports=getUserSkills;