import "./home.css"; 
import Blogs from "../Blogs/Blogs";
import Blog from "../Blogs/Blog";

function Home(){
    return(
        <div className="home">
            <div className="container-fluid">
            <h1>Memoir</h1>
            <p>Personal blog by Lamia Jabin Rimty</p>
                
                {
                    Blogs.map(newBlog=>{
                       return(
                        <Blog
                        key={newBlog.id}
                        title={newBlog.title}
                        time={newBlog.time}
                        qoute={newBlog.qoute}
                        />
                       );

                    })
                }
                
                
            </div>
        </div>
    );
}
export default Home;