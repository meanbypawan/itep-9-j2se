import { validationResult } from "express-validator"
import { User } from "../model/user.model.js";
import bcrypt from "bcryptjs";
export const signIn = async (request,response,next)=>{
   try{
    let {email,password} = request.body;
    let user = await User.findOne({email});
    if(user){
      let status = bcrypt.compareSync(password,user.password);
      return status ? response.status(200).json({message: "Sign in success..",user}) : response.status(401).json({error: "Bad request | invalid password"})
    }
    else
     return response.status(401).json({error: "Bad request | invalid email id"});
   }
   catch(err){
    return response.status(500).json({error: "Internal Server Error"});
   }
}
export const signUp = async (request,response,next)=>{
  try{  
   const errors =  validationResult(request);
   if(!errors.isEmpty())
     return response.status(401).json({error:"Bad request"});
   
   let saltKey = bcrypt.genSaltSync(10);
   let encryptedPassword = bcrypt.hashSync(request.body.password,saltKey);
   request.body.password = encryptedPassword;
   
   let user = await User.create(request.body);  
   return response.status(201).json({message: "Sign up success",user});
  }
  catch(err){
    console.log(err);
    return response.status(500).json({error: "Internal Server Error"});
  }
}