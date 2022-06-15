import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const protect = asyncHandler (async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
     {
        console.log('req.headers.authorization', req.headers.authorization);
    }

    try{
        token = req.headers.authorization.split(' ')[1];
        const decoded  = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).selected('-password');
        next();
    }
    catch(err){
        console.log('err', err);
        return res.status(401).json({
            error: 'You are not authorized to access this resource'
        });
    }
    if (!token) {
        res.status(401);
        throw new Error('Not authorized, please login');
    }
   
}
);

export { protect };

