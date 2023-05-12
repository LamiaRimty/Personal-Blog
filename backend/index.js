const express = require('express')
const Joi = require('joi');
const app = express();
app.use(express.json()); //json returns middleware
const multer = require("multer")
const path = require("path")
app.use("/images", express.static(path.join(__dirname, "/images")))
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/blogDB');

const blogSchema = new mongoose.Schema({
  image:String,
  title:String,
  time:String,
  qoute:String,
  description:String
});

//schema model
const Blog =mongoose.model("Blog",blogSchema);

const blog= new Blog({
   image:"https://c8.alamy.com/comp/W06HG1/chawk-bazar-iftar-market-of-dhaka-is-well-known-for-traditional-spicy-foods-thousands-of-people-gathered-on-a-road-in-front-of-shahi-mosque-where-sel-W06HG1.jpg",
    title:"Chawkbazar: The 400-year-old bustling heart of Dhaka",
    time:"⏱21 February 2019🧆🧃.5mins to read.",
    qoute:"Chawkbazar is popular during Ramadan, the Muslim month of fasting, to break fast",
    description:"During the Muslim holy month of Ramadan, Chawkbazar - which is popular for various types of traditional food - turns into the main place for Iftar items - the meal which breaks the daily fast. Thousands of vendors peddle their goods on its streets, often filled with people waiting to get their fill of kebabs and different types of biryani - a popular rice dish. They compete for space with the hundreds of electrical, telephone, and internet cables that hang on to its narrow lanes, posing another danger for the local people in Chawkbazar. "
  
})



//blog.save();
//save blogs
const blog1= new Blog({
  image:"https://c.stocksy.com/a/2bL800/z9/1989644.jpg",
  title: "My journey to Web Development",
  time: "December 1,2022.🥐 10 min to read",
  qoute: "A personal reflection",
  description:
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",

});

const blog2= new Blog({
  image:"https://eatwelltraveloften.online/wp-content/uploads/2016/08/IMG_0083-1080x720.jpg",
    title: "Difference between == and === in javascript",
    time: "December 1,2022 .  ☕️ 10 min to read",
    qoute: "Which one to use?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
 
});

const blog3= new Blog({
  image:"https://media.istockphoto.com/id/516019979/photo/amsterdam-summer-sunrise.jpg?s=612x612&w=0&k=20&c=YnYn52rR0J_YINkjK8JPMTfnrqRn1E2AzlLayNOgnC4=",
    title: "Ways of Creating objects JavaScript",
    time: "December 1,2022 .  🍱 10 min to read",
    qoute: "Three ways to set you on right path.?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
  
});

// Blog.insertMany([blog1,blog2,blog3]
//   // ,function(error){
//   // if(error){
//   //   console.log(error)
//   // }
//   // else{
//   //   console.log("Successfullyn saved all blogs to blogDB");
//   // }}
 
// )


Blog.find().then(function (blogs) {
  mongoose.connection.close();
   blogs.forEach(function(blog){
    console.log(blog.title);
   })
})
.catch(function (err) {
  console.log(err);
});

Blog.updateOne({ _id: "6453b7e40c53a1d7d4b3320b" },{ title: "Chawkbazar: The 400-year-old bustling heart of Dhaka" }).then(function(blogs){
  console.log("updated succesfully");
}).catch(function (err) {
  console.log(err);
});

// Blog.deleteOne({ title:"Chawkbazar: The 400-year-old bustling heart of Dhaka"},function(error){



const blogs = [
  {
    id: 1,
    image:"https://c.stocksy.com/a/2bL800/z9/1989644.jpg",
    title: "My journey to Web Development",
    time: "December 1,2022.🥐 10 min to read",
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


  {
    id: 4,
    image:"https://www.discoverbenelux.com/wp-content/uploads/2015/09/SF_Gouda_003.jpg",
    title: "Where Does Gouda Cheese Come From?",
    time: "December 13,2023 .  🍱 10 min to read",
    qoute: "Gouda Cheese Market",
    description:
      "If you enjoy insights into culinary traditions and regional heritage it’s well worth taking a look at Gouda’s long-established weekly cheese market. Every Thursday during the summer months (subject to weather), locals don traditional costumes to convey how the Gouda cheese market was in bygone times. You’ll see a dozen or so people dressed as farmers, maids in lace bonnets and red aprons as well as cheese shop owners wearing white jackets and flat caps. Men recreate intense price negotiations between cheese producing farmers and buyers. It’s a dramatic and historically accurate scene.",
  },
  
    // id:5,
    // image:"https://c8.alamy.com/comp/W06HG1/chawk-bazar-iftar-market-of-dhaka-is-well-known-for-traditional-spicy-foods-thousands-of-people-gathered-on-a-road-in-front-of-shahi-mosque-where-sel-W06HG1.jpg",
    // title:"Chawkbazar: The 400-year-old bustling heart of Dhaka",
    // time:"⏱21 February 2019🧆🧃.5mins to read.",
    // qoute:"Chawkbazar is popular during Ramadan, the Muslim month of fasting, to break fast",
    // description:"During the Muslim holy month of Ramadan, Chawkbazar - which is popular for various types of traditional food - turns into the main place for Iftar items - the meal which breaks the daily fast. Thousands of vendors peddle their goods on its streets, often filled with people waiting to get their fill of kebabs and different types of biryani - a popular rice dish. They compete for space with the hundreds of electrical, telephone, and internet cables that hang on to its narrow lanes, posing another danger for the local people in Chawkbazar. "
  
  
]

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
  });

app.get("/backend/blogs",(req,res)=>{
  res.send(blogs);
})

app.get("/backend/blogs/:id",(req,res)=>{ 
 const blog= blogs.find((b)=>b.id=== parseInt(req.params.id));

  if(!blog){
   return res.status(404).send("Sorry this blog with given the id is not available!");  
  } 
  res.send(blog);
})


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");

  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
  
});


const upload = multer({ storage: storage });

app.post("/backend/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});




app.post("/backend/blogs",(req,res)=>{
  const result =validateBlog(req.body);
  const {error} =validateBlog(req.body); // 3.validate
 
  if(error){
    console.log(error)
  return  res.status(400).send(error.details[0].message);  // 4.if invalid,return 400 bad req
  
  }
  
  const blog ={
    id: blogs.length+1,
    image: req.body.image,
    title: req.body.title,
    time: req.body.time,
    qoute:req.body.qoute,
    description:req.body.description
  };

  blogs.push(blog);
  res.send(blog);

});

//UPDATING BLOG POST
app.put("/backend/blogs/:id",(req,res)=>{
  console.log(10);
  const blog = blogs.find( c => c.id ===parseInt(req.params.id)); //1.look up the blog
  console.log(20);
  if(!blog){ //if don't hav a blog with given id
    console.log(30);
   return res.status(404).send("Sorry this blog with given the id is not available!"); //2.if not exit ,return 404
  }
  console.log(40);
  console.log(req.body);
  const {error} =validateBlogPut(req.body);

  console.log(50);
   if(error){
    console.log(error)
    return res.status(400).send(error.details[0].message);
  
   }
   console.log(60);
// 5,update log
blog.title = req.body.title;
blog.image = req.body.image;
blog.time= req.body.time;
blog.qoute = req.body.qoute;
blog.description= req.body.description;

console.log(70);
// 6.return the update course
res.send(blog);
console.log(80);
})
///valid for put
function validateBlogPut(blog){
  const schema = Joi.object({
    
  image:Joi.string(),
  title:Joi.string().min(3).required(),
  time:Joi.string(),
  qoute:Joi.string(),
  description:Joi.string().required()
  
})
console.log(90);
return schema.validate(blog);

}

console.log(100);
 

app.delete("/backend/blogs/:id",(req,res)=>{ 
//Look up the course
//Not Existing ,return 404
const blog= blogs.find((b)=>b.id=== parseInt(req.params.id));
if(!blog){
 return res.status(404).send("Sorry this blog with given the id is not available!");
} 
//Delete
const index = blogs.indexOf(blog);
blogs.splice(index,1);

//Return the same course
  res.send(blog);
})


function validateBlog(blog){
  const schema = Joi.object({
   
  image:Joi.string().required(), 
  title:Joi.string().min(3).required(),
  time:Joi.string().required(),
  qoute:Joi.string().required(),
  description:Joi.string().required()

})

return schema.validate(blog);

}


const cors=require("cors");
const { error, Console } = require('console');
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration
//PORT
// app.set('port', (5000));
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Backend server listening on ${port}...`);
})


