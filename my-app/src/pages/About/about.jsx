import "./about.css";
function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <h5>Get to Know</h5>
      <div className="about-container">
        <div className="aboutMyImg">
          <div className="about-img">
            <img
              className="about-img"
              src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/314409068_3457665244515886_1745854450779409135_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=GQQ4ZwbwjzsAX8EK_QQ&_nc_ht=scontent-ams4-1.xx&oh=00_AfDgVdEYTkbhyB73zPXFz2Bn-QFbYlxnQB_RbA794LrpOA&oe=64185000"
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
        </div>
      </div>
    </div>
  );
}
export default About;
