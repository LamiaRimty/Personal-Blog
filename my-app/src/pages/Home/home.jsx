import "./home.css";
import Blog from "../../components/blog/Blog";
function Home() {
  return (
    <section className="home">
      <div className="container container-fluid">
        <h1 className="heading">Memoir</h1>
        <p>
          Personal blog by{" "}
          <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">
            Lamia Jabin Rimty
          </a>
        </p>
      </div>
      <Blog />
      {/* <Category/> */}
    </section>
  );
}
export default Home;
