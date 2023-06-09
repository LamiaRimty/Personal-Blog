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

   save(){

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
 
            // const[newBlog,_] = db.execute(sql);
            // return newBlog;
                return db.execute(sql);
        }

    static findAll(){
      let sql= `SELECT * FROM blogs;`;
      return db.execute(sql);
    }
    static findById(id){
        let sql= `SELECT * FROM blogs WHERE id = ${id};`;
        return db.execute(sql); //return that promise
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