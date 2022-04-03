import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(async(req, res, next) => {
    const headerAuth = req.headers.authorization && req.headers.authorization.startsWith('Bearer ');
    if(headerAuth){
        try {
            const token = req.headers.authorization.split(' ')[1];
            const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
            // Pass database content to be to fetch via res in the next middleware function.
            req.user = await User.findById(verifiedToken.id).select('-password');
            next();
        } catch (error) {
            res.status(401);
            throw new Error('You are not authorized to view this page!, Wrong Token detected');
        }
    } else {
        res.status(401)
        throw new Error('You are not authorized to view this page!, No Token is found!');
    }    
});

export {protect}