import User from '../models/userModel.js';
import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';

// POST /api/user/
// authenticate user
// PUBLIC
const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;
    
    const user = await User.findOne({email});

    if(user && (await user.matchPassword(password))){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401);
        throw new Error('Invalid password or email!')
    }
})

const userProfile = asyncHandler(async(req, res) => {
    // in authMiddleware we fetch the profile;
    // req.user = await User.findById(verifiedToken.id).select('-password');
    const {user} = req;
    if(user){
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('You are not authorized to view this page!')
    }
})

export {authUser, userProfile}