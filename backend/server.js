require ("dotenv").config();
const express = require('express')
const app = express();
app.use(express.json()); //json returns middleware

//redirect request to endpoint starting with /blogs to blogRoutes.js
//app.use("/blogs",require("./routes/blogRoutes"));

//Global Error hundler .Important function params must start with err

app.use((err,req,res,next)=>{
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went really wrong",
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend server listening on ${port}...`);
})