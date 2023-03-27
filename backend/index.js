const express = require('express')
const app = express()
const dotenv=require("dotenv")
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true})
.then(console.log("Connect to MongoDB"))
.catch(err => console.log(err));

app.listen(3000, () => {
  console.log(`Backend server listening`)
})