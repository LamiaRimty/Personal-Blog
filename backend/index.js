const express = require('express')
const app = express();
app.use(express.json()); //json returns middleware

const blogs = [
  {
    id: 1,
    image:"https://c.stocksy.com/a/2bL800/z9/1989644.jpg",
    title: "My journey to Web Development",
    time: "December 1,2022 .  🥐 10 min to read",
    qoute: "A personal reflection",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },

  {
    id: 2,
    image:"https://eatwelltraveloften.online/wp-content/uploads/2016/08/IMG_0083-1080x720.jpg",
    title: "Difference between == and === in javascript",
    time: "December 1,2022 .  ☕️ 10 min to read",
    qoute: "Which one to use?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },

  {
    id: 3,
    image:"https://media.istockphoto.com/id/516019979/photo/amsterdam-summer-sunrise.jpg?s=612x612&w=0&k=20&c=YnYn52rR0J_YINkjK8JPMTfnrqRn1E2AzlLayNOgnC4=",
    title: "Ways of Creating objects JavaScript",
    time: "December 1,2022 .  🍱 10 min to read",
    qoute: "Three ways to set you on right path.?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  },
]

app.get("/",(req,res)=>{  //route handler function
  res.send("Hey There!!!!");
})

app.get("/backend/blogs",(req,res)=>{
  res.send(blogs);
})

app.get("/backend/blogs/:id",(req,res)=>{ 
  const blog= blogs.find((b)=>b.id=== parseInt(req.params.id));

  if(!blog){
    res.status(404).send("Sorry this blog with given the id is not available!");
  } 
  res.send(blog);
})


app.post("/backend/blogs",(req,res)=>{
  const blog ={
    id: blogs.length+1,
    title: req.body.title,
    time: req.body.time,
    qoute:req.body.qoute,
    description:req.body.description
  }
  blogs.push(blog);
  res.send(blog);
})


// const dotenv = require("dotenv");
// dotenv.config();
// const mongoose = require('mongoose');


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

//PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend server listening on ${port}...`);
})