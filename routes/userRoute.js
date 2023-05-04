
import express from "express";
import { createUser, deleteUser, updateUser, userGet, usersGet } from "../controllers/userController.js";

const userRoute = express()

userRoute.get('/users',usersGet)
userRoute.get('/user/:id',userGet)
userRoute.post('/user/new',createUser)
userRoute.put('/user/update/:id',updateUser)
userRoute.delete('/user/delete/:id',deleteUser)


export default userRoute;