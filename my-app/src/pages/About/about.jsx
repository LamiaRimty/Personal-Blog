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
            I'm Lamia Jabin Rimty.Beautiful Bangladesh is a small country in
            South Asia & that’s where I am from.
            <br></br>
            <br></br>I went to a decent school called Rangpur Govt Girls
            School,then joined a college called Rangopur college & then I did my
            gradutation from the deparment of Computer Science & Engineering of
            The University of Rajshahi.
            <br></br>
            <br></br>I now live in the Netherlands.I initially came here in
            2022.
            <br></br>
            <br></br>
            Over the time,I have gained a growing of experience designing and
            developing web applications.I've always been interested in Web
            development and have some basic skills in HTML, CSS, JavaScript,
            Jquery, and SQL. I am currently improving my mobile app development
            skills by learning various new technologies.I like reading books and
            traveling and have a passion for painting.
            {/* There’s a saying – How come you don’t know you are in the good old days, when you are in the good old days.I am getting old, nostalgic and I think about that every day now.  */}
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
