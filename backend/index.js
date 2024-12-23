const express = require("express");
require("dotenv").config();
const dbConnection = require("./config/db");
const Router = require("./routes/items");
const cors = require("cors");
const bodyParser = require("body-parser");


const App = express();

App.use(cors({origin:true,credentials:true}));
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended:true }));


App.get('/',(req,res)=>res.send("Welcome to Glow Élan!"));

App.use('/api/items',Router);

const PORT = process.env.PORT || 3000;

//db connection
dbConnection();

App.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});