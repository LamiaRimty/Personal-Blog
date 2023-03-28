const express = require('express')
const app = express()

app.get("/",(req,res)=>{  //route jandler function
  res.send("Hey There!");
})

app.get("/backend/blogs",(req,res)=>{
  res.send(
    [
      {id:1},
     { id:2},
     { id:3}
    ]
  );
})


// const dotenv = require("dotenv");
// dotenv.config();
// const mongoose = require('mongoose');
// app.use(express.json())

// mongoose.connect(`${process.env.MONGO_URL}`,
//   {
//     useUnifiedTopology:true,
//     useNewUrlParser: true,
    
//   }
//   )
//   .then(() => {
//     console.log("Successfully connected to Database");
//   })
//   .catch((error) => {
//     console.log(`can not connect to database, ${error}`);
//   });


app.listen(3000, () => {
  console.log(`Backend server listening`)
})