import "./home.css"; 
import BlogFile from "../../components/blogFile/BlogFile";
import Blogs from "../../components/blogs/Blogs";

function Home(){
    return(
        <div className="home">
            <div className="container-fluid">
            <h1>Memoir</h1>
            <p>Personal blog by <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">Lamia Jabin Rimty</a></p>
                
                {
                    BlogFile.map(newBlog=>{
                       return(
                        <Blogs
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