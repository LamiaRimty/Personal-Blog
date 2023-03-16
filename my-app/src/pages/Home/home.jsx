import "./home.css";
import Blog from "../../components/blog/Blog";
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
        <Blog />
      </div>
      {/* <Category/> */}
    </div>
  );
}
export default Home;
