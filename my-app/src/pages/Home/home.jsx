import "./home.css";
// import BlogFile from "../../components/blogFile/BlogFile";
// import Blog from "../../components/blog/Blog";
//import Category from "../../components/category/Category";

function Home() {
  return (
    <div className="home">
      <div className="container-fluid">
        <h1 className="heading">Memoir</h1>
        <p>
          Personal blog by{" "}
          <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">
            Lamia Jabin Rimty
          </a>
        </p>
      </div>
      <div className="home-blog-list">
        {/* {BlogFile.map((newBlog) => {
          return (
            <Blog
              key={newBlog.id}
              title={newBlog.title}
              time={newBlog.time}
              qoute={newBlog.qoute}
            />
          );
        })} */}
      </div>
      {/* <Category/> */}
    </div>
  );
}
export default Home;
