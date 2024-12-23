const mongoose = require("mongoose");
require("dotenv").config();
const dbURL = process.env.URL;

mongoose.set('strictQuery', true,'useNewUrlParser', true);


const connection = async()=>{
    try{
        await mongoose.connect(dbURL);
        console.log("Database connection established!");
    }catch(e){
        console.error(e.message);
        process.exit();
    }
}

module.exports = connection;