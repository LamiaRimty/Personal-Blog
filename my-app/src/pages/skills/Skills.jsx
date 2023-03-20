import "./skills.css";
//import { HiCheckBadge } from "react-icons/Hi";
import { BsPatchCheckFill } from "react-icons/bs";
function Skills() {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <h5>What skills I have</h5>
      <div className="container container-skills">
        <div className="skills-frontend">
          <h3>Frontend Development</h3>

          <div className="skill-content">
            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>HTML</h4>
            </article>
            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>CSS</h4>
            </article>

            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
            </article>

            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>JavaSript</h4>
            </article>
            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>React</h4>
            </article>

            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>Figma</h4>
            </article>
            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>Adobe</h4>
            </article>
          </div>
        </div>
        <div className="skills-backend">
          <h3>Backend Development</h3>
          <div className="skill-content">
            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>Node.js</h4>
            </article>
            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
            </article>

            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>MySql</h4>
            </article>

            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>JavaSript</h4>
            </article>
            <article className="skill-detail">
              <BsPatchCheckFill />
              <h4>React</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
