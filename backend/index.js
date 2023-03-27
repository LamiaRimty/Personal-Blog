const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
app.use(express.json())

mongoose.connect(`${process.env.MONGO_URL}`,
  {
   
    useNewUrlParser: true,
    
  }
  )
  .then(() => {
    console.log("Successfully connected to Database");
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`);
  });


app.listen(3000, () => {
  console.log(`Backend server listening`)
})