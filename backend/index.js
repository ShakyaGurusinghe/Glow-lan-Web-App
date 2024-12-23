const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db");
const App = express();

App.get('/',(req,res)=>res.send("Welcome to Glow Élan!"));

const PORT = process.env.PORT || 3000;

//db connection
dbConnection();

App.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});