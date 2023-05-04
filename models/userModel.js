import mongoose from "mongoose";

const userSchima = new mongoose.Schema({
    name:String,
    place:String,
    password:String
}) 
const User = mongoose.model('User',userSchima)

export default User;