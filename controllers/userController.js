import User from "../models/userModel.js"
import { getUser, getUsers, userCreate, userUpdate, userDelete } from "../services/userService.js"

//all users view
export const usersGet = async(req,res)=>{
   const allUser = await getUsers()
    res.send(allUser)
}

//single user view
export const userGet = async(req,res)=>{
    const userId = req.params.id;
    const allUser = await getUser(userId)
     res.send(allUser)
 }


 export const createUser = async(req,res)=>{
    const data = req.body;
    const user = await userCreate(data)
    res.send(user)
}
export const updateUser = async(req,res)=>{
    const userId = req.params.id;
    const data = req.body;
    const updatedUser = await userUpdate(userId,data)
    res.send(updatedUser)
}

export const deleteUser = async(req,res)=>{
    const userId = req.params.id;
    const deletedUser = await userDelete(userId)
    res.send("deleted...")
}
