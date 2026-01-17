const express = require('express');
const router = express.Router();
const Person = require('./../models/person.js');

router.post('/',async (req, res) => {
  try{
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log("data saved",savedPerson);
    res.status(201).json(savedPerson);
    
  }catch(err){
    console.log("Error:", err);
    res.status(500).json({error: 'Internal Server Error'});
  }
});
router.get('/',async (req,res) => {
  try{
    const data = await Person.find({});
    console.log("data fetched");
    res.status(200).json(data);
  }catch(err){
      console.log("Error:", err);
      res.status(500).json({error: 'Internal Server Error'});
  }
});

router.get('/:worktype', async(req,res)=>{
  try{
  const worktype= req.params.worktype;
  if(worktype=='chef' || worktype=='waiter' || worktype=='manager'){
      const response = await Person.find({work: worktype});
      console.log("Data fetched for work type: ");
      res.status(200).json(response);
  }else{
      res.status(400).json({error: 'Invalid work type'});
  }
}catch(err){
    console.log("Error:", err);
    res.status(500).json({error: 'Internal Server Error'});
}
});

router.put('/:id', async (req, res) => {
  try {
    const personID = req.params.id;
    const updatedData = req.body;
    const response = await Person.findByIdAndUpdate(personID, updatedData, { 
        new: true,
        runValidators: true});
    console.log("Data updated for ID:");
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
        const personID = req.params.id;
        const response = await Person.findByIdAndDelete(personID);
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