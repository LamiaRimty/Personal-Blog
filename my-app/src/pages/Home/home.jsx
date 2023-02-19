import "./home.css"; 
import Blogs from "../../components/Blogs/Blogs";
import Blog from "../../components/Blogs/Blog";

function Home(){
    return(
        <div className="home">
            <div className="container-fluid">
            <h1>Memoir</h1>
            <p>Personal blog by <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">Lamia Jabin Rimty</a></p>
                
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