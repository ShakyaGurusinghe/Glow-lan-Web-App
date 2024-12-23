const express = require('express');
const Product = require('../models/item');
const router = express.Router();

//test
router.get('/test',(req,res)=> res.send("Product Routes are working properly!"));

//insert an item to the db
router.post('/',(req,res)=>{
    Product.create(req.body)
    .then(()=>res.json({msg:"Product is added successfully!"}))
    .catch((error)=>res.status(400).json({msg:"Product adding is failed!",error:error.message}));
});

//get all items from the db
router.get('/',(req,res)=>{
    Product.find()
   .then((products)=>res.json(products))
   .catch((error)=>res.status(400).json({msg:"Products fetching is failed!",error:error.message}));
});

//get a specific item from db
router.get('/:id',(req,res)=>{
    Product.findById(req.params.id)
   .then((products)=>res.json(products))
   .catch((error)=>res.status(400).json({msg:"Products fetching is failed!",error:error.message}))
});

//update an item in db
router.put('/:id',(req,res)=>{
    Product.findByIdAndUpdate(req.params.id,req.body)
    .then(()=>res.json({msg:"Product is updated successfully!"}))
    .catch((error)=>res.status(400).json({msg:"Product update is unsuccessful!",error}));
});

//delete an item from db
router.delete('/:id',(req,res)=>{
    Product.findByIdAndDelete(req.params.id)
    .then(()=>res.json({msg:"Product is deleted successfully!"}))
    .catch((error)=>res.status(400).json({msg:"Product deletion is unsuccessful",error:error}))
});

module.exports = router;