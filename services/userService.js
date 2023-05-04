import User from "../models/userModel.js"

//all users view
export const getUsers = async()=>{
   const users = await User.find();
   return users
}

export const getUser = async(userId)=>{
    const user = await User.findById(userId)
    return user
}
export const userCreate = async(data)=>{
    console.log(data);
    const user = await User.create(data)

    return user; 
}
export const userUpdate = async(userId,data)=>{
    const user = await User.findByIdAndUpdate(userId,data,{new:true})
    return user
}
export const userDelete =async(userId)=>{
    const user = await User.findByIdAndDelete(userId);
    return user
}