const express = require('express')
const Joi = require('joi');
const app = express();
app.use(express.json()); //json returns middleware
const multer = require("multer")
const path = require("path")
app.use("/images", express.static(path.join(__dirname, "/images")))

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
// //Upload images [From Documentation]
// const storage = multer.diskStorage({
//   destination: (req, file, callb) => {
//     callb(null, "images")
//   },
  
//   filename: (req, file, callb) => {
//     //callb(null, "file.png")
//     callb(null, req.body.name)
//   },
  
// })

// console.log("10");

// const upload = multer({ dest: "blogs/" })
// console.log("a")
// app.post("/backend/blogs", upload.single("image"),(req,res)=>{
  
//   console.log("b")

//   const result =validateBlog(req.body);
//   const {error} =validateBlog(req.body); // 3.validate
//   console.log("c");
//   if(error){
//     console.log(error);
//   return  res.status(400).send(error.details[0].message);  // 4.if invalid,return 400 bad req
  
//   }
//   console.log("e");
//   const blog ={
//     id: blogs.length+1,
//     name:req.file.filename,
//     image: req.body.file,
//     title: req.body.title,
//     time: req.body.time,
//     qoute:req.body.qoute,
//     description:req.body.description
 
//   };
  
//   console.log("f");
//   blogs.push(blog);
//   res.send(blog);
//   console.log("g");


// });
// console.log("h");
//////////////////////\\\\\\\\\\\\\\\\\\\

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
    console.log("10");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
  
});
console.log("20");

const upload = multer({ storage: storage });
console.log("30");
app.post("/backend/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});
console.log("40");



app.post("/backend/blogs",(req,res)=>{
  const result =validateBlog(req.body);
  const {error} =validateBlog(req.body); // 3.validate
  console.log("50");
  if(error){
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
 
  const blog = blogs.find( c => c.id ===parseInt(req.params.id)); //1.look up the blog
  if(!blog){ //if don't hav a blog with given id
   return res.status(404).send("Sorry this blog with given the id is not available!"); //2.if not exit ,return 404
  }

  const {error} =validateBlog(req.body);

   if(error){
    return res.status(400).send(error.details[0].message);
  
   }

// 5,update log
blog.title = req.body.title;
blog.image = req.body.image;
blog.time= req.body.image;
blog.qoute = req.body.qoute;
blog.description= req.body.description;


// 6.return the update course
res.send(blog);
})



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


const cors=require("cors");
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
