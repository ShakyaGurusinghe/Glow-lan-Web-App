const express = require("express");

const App = express();

App.get('/',(req,res)=>res.send("Welcome to Glow Élan!"));

const PORT = process.env.PORT || 3000;

App.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});