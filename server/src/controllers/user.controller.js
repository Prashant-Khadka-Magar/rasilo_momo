import asyncHandler from "express-async-handler";
import {User} from "../models/User.model.js";
import uploadOnCloudinary from "../utils/cloudinary.js"


//while registering a new user

const register= asyncHandler(async( req, res)=>{
    try {
        const {firstName, lastName, email, password,role }= req.body;
    } catch (error) {
        
    }
})


export {register}