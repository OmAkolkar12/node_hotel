const express = require('express');
const router = express.Router();

const menuItem = require('./../models/menu.js');

router.get('/', async(req,res)=>{
  try{
    const data = await menuItem.find({});
    console.log("Menu data fetched");
    res.status(200).json(data);

  }catch(err){
    console.log("Error:", err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});
router.post('/', async(req,res)=>{
  try{
    const data = req.body;
    const newMenuItem = new menuItem(data); 
    const savedMenuItem = await newMenuItem.save();
    console.log("Menu item saved", savedMenuItem);
    res.status(201).json(savedMenuItem);
  }catch(err){
    console.log("Error:", err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});

router.get('/:taste', async(req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste=='sweet' || taste=='spicy' || taste=='savory'){
            const response = await menuItem.find({taste: taste});
            console.log("Data fetched for taste: ");
            res.status(200).json(response);
        }else{
            res.status(400).json({error: 'Invalid taste type'});
        }
    }catch(err){
        console.log("Error:", err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.put('/:id', async (req, res) => {
  try {
    const menuID = req.params.id;
    const updatedData = req.body;
    const response = await menuItem.findByIdAndUpdate(menuID, updatedData, { 
        new: true,
        runValidators: true});
    console.log("Data updated for Menu ID:");
    res.status(200).json(response);

    if(!response){
      res.status(404).json({error: 'Person not found'});
    }
  }catch(err){
    console.log("Error:", err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});
   
router.delete('/:id', async (req, res) => {
    try{
        const menuID = req.params.id;
        const response = await menuItem.findByIdAndDelete(menuID);
        if(!response){
        res.status(404).json({error: 'Person deleted Successfully'});
        }
        console.log("Data deleted for ID:");
        res.status(200).json(response);

    
    }catch(err){
        console.log(err);
        res.status(500).json({error: 'Internal Server Error'});
    }
});
module.exports = router;