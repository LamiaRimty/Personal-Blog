const mongoose= require("mongoose");

const BlogSchema= new mongoose.Schema({

    title:{
        type:String,
        require:true,
        unique:true
    },

    image:{
        type: String,
        require:false
    },

    time:{
        type:String,
        require:true,
       
    },

    qoute:{
        type:String,
        require:true,
       
    },

   description:{
        type:String,
        require:true,
    }

},
{ timestamps: true })

module.exports=mongoose.model("blog",BlogSchema)