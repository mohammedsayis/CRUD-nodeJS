import mongoose from 'mongoose'
export default async function dataBaseConnection(){
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/crud1');
        console.log("Data Base Connected Successfully ");
    }catch(error){
        console.log("DataBase Not connected");
        throw error
    }
}