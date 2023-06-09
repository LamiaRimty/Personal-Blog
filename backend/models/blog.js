//controller for blog
const db= require("../config/db");

class Blog{
    constructor(image,title,time,qoute,description){
        this.image =image;
        this.title=title;
        this.time=time;
        this.qoute=qoute;
        this.description=description; 
    }

    async save(){

        let sql= `INSERT INTO blogs(
            image,
            title,
            time,
            qoute,
            description
            )
            
            VALUES(
                '${this.image}',
                '${this.title}',
                '${this.time}',
                '${this.qoute}',
                '${this.description}'
            )
            `;
 
            const[newBlog,_] = await db.execute(sql);
            return newBlog;
    }

    static findAll(){

    }

}
module.exports= Blog;





// const mongoose= require("mongoose");

// const BlogSchema= new mongoose.Schema({

//     title:{
//         type:String,
//         require:true,
//         unique:true
//     },

//     image:{
//         type: String,
//         require:false
//     },

//     time:{
//         type:String,
//         require:true,
       
//     },

//     qoute:{
//         type:String,
//         require:true,
       
//     },

//    description:{
//         type:String,
//         require:true,
//     }

// },
// { timestamps: true })

// module.exports=mongoose.model("blog",BlogSchema)