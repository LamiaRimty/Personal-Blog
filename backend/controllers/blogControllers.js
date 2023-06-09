//config db & connect
const e = require("cors");
const Blog = require("../models/Blog");

exports.getAllBlogs=  async(req,res,next)=>{
    try {
        const blogs= await post.findAll();
        res.status(200).json({blogs});
    } catch (error) {
        console.log(error);
        next(error);//return to global error handler
    }
   
}

exports.createNewBlog=  async(req,res,next)=>{

try {
    let { image,title,time,qoute,description } =req.body; //stract frpm postman
    let blog =new Blog(image,title,time,qoute,description);

    blog=await blog.save();
    console.log(blog);
    res.status(201).json({ message: "Post created"})
} catch (error) {
    console.log(error);
        next(error);//return to global error handler
}
    
}

exports.getBlogById=  async(req,res,next)=>{
    try {
        let blogId = req.params.id;
        let [blog,_] = await Blog.findById(blogId)
        res.status(200).json({blog:blog[0]});
    } catch (error) {
        
    }
}