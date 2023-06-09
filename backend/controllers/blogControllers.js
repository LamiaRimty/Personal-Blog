//config db & connect
const Blog = require("../models/Blog");
exports.getAllBlogs=  async(req,res,next)=>{
    res.send("Get all blogs route");
}

exports.createNewBlog=  async(req,res,next)=>{
    let { image,title,time,qoute,description } =req.body; //stract frpm postman
    let blog =new Blog(image,title,time,qoute,description);

    blog=await blog.save();
    console.log(blog);

    res.send("Create New Blog route");
}

exports.getBlogById=  async(req,res,next)=>{
    res.send("Get Blog by id");
}