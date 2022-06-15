import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc   Get all users
// @route  GET /api/v1/users
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
     
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    });
  }
    else {
        res.status(401);
        throw new Error("Invalid credentials");
        }
        
});



// @desc   Get  user profile
// @route  GET /api/v1/users
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  
  res.send('hi');
});
export { authUser, getUserProfile };

