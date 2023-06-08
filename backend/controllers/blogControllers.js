//config db & connect

exports.getAllBlogs=  async(req,res,next)=>{
    res.send("Get all blogs route");
}

exports.createNewBlog=  async(req,res,next)=>{
    res.send("Create new blog route");
}

exports.getBlogById=  async(req,res,next)=>{
    res.send("Get blog by id");
}