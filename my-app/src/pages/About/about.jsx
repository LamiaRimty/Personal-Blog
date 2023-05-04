import "./about.css";
function About() {
  return (
    <section className="about">
      <h1 className="about-title">About Me</h1>
      <h5>My Introduction</h5>
      <div className="container about-container">
        <div className="aboutMyImg">
          <div className="about-img">
            <img
              className="about-img"
              // src="https://d2gg9evh47fn9z.cloudfront.net/1600px_COLOURBOX56391809.jpg"
              src="https://static.vecteezy.com/system/resources/thumbnails/007/525/724/small_2x/young-woman-in-hat-and-summer-dress-rides-bicycle-with-basket-of-flowers-bike-ride-against-sky-on-village-street-concept-of-summer-holidays-healthy-lifestyle-vector.jpg"
              alt="rimty"
            />
          </div>
        </div>

        <div>
          <p className="info">
            I'm Lamia Jabin Rimty.I'm originally from Bangladesh,but I've been
            living here in the Netherlands since March 2022.I've completed
            gradutation from Computer Science & Engineering of The University of
            Rajshahi.Over the time,I have gained a growing of experience
            designing and developing web applications.I've always been
            interested in Web development and have some basic skills in HTML,
            CSS, JavaScript, Jquery, and SQL. I am currently improving my mobile
            app development skills by learning various new technologies.I like
            reading books and traveling and have a passion for painting.
          </p>
          <a href="#contact" className="btn btn-info">
            Let's talk
          </a>
          {/* <a download="" href={CV} className="btn btn-info">
            Download CV
          </a> */}
        </div>
      </div>
    </section>
  );
}
export default About;
