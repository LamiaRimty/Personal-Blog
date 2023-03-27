import "./home.css";
import Blog from "../../components/blog/Blog";

function Home() {
  return (
    <section className="home">
      <div className="container container-home">
        <div className="home-title">
          <h1 className="home-headingLg">Memoir</h1>
          <p className="home-headingSm">
            Personal blog by{" "}
            <a href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/">
              Lamia Jabin Rimty
            </a>
          </p>
        </div>
        <img
          className="home-img"
          alt=""
          src="https://img.freepik.com/premium-vector/happy-girl-dressed-trendy-clothes-riding-city-bicycle-with-flower-bouquet-front-basket-adorable-young-hipster-woman-bike-cute-pedaling-female-bicyclist-flat-cartoon-vector-illustration_198278-12371.jpg"
        />
        {/* <img src="https://thumbs.dreamstime.com/b/woman-riding-bicycle-amsterdam-realistic-image-hand-drawing-style-34006004.jpg"/>
         */}
      </div>
      <Blog />
      {/* <Category/> */}
    </section>
  );
}
export default Home;
