const express = require('express');
const router = express.Router();
const USER_SCHEMA = require('../models/UserModel')


router.get('/home',(req,res)=>{
    res.send("Hello App is Working")
})

router.get('/api/storeData', async (req, res) => {
    try {
      // Extract data from the query parameter
      const { data } = req.query;
  
      // Split the data into an array
      const dataArray = data.split('$');
  
      // Create a new document in the database
      const newData = new USER_SCHEMA({
        IMEI: dataArray[0],
        Voltage: dataArray[1],
        Current: dataArray[2],
        Power: dataArray[3],
        Frequency: dataArray[4],
        // Map other fields from dataArray to your schema
      });
  
      await newData.save();
  
      res.status(201).json({ message: 'Data stored in MongoDB successfully' });
    } catch (error) {
      console.error('Error storing data in MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.get('/displayData', async (req, res) => {
    try {
      const allusers = await USER_SCHEMA.find()
      res.render('home',{
        users:allusers,
     });
    } catch (error) {
      console.error('Error retrieving data from MongoDB:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });


module.exports = router;

