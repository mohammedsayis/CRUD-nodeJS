import express from 'express';
import userRoute from './routes/userRoute.js';
import dataBaseConnection from './db connection/db.js'


const app = express()
const PORT = process.env.PORT || 3001
//Create User Schima 

app.use(express.json())

app.use(userRoute)




await dataBaseConnection()
app.listen(PORT,()=>console.log(`Server is Running Port Number ${PORT}`))


