import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header navbar navbar-nav navbar-expand-lg navbar-dark ">
        <div className="container container-header">
          <div className="navbar-header">
            <p className="navbar-brand">
              <img
                className="img"
                src="https://media.licdn.com/dms/image/C4E03AQFjkJ8sh7Ywaw/profile-displayphoto-shrink_200_200/0/1660130720842?e=1681344000&v=beta&t=sPzIr8wqev46_zVWyDzPlOMcLSmxhcNEguzDrL3PAmk"
                alt=""
              />
              Memoir
              <Link to="/"></Link>
            </p>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="nav navbar-nav ms-auto ">
              <li id="home">
                <Link to="/" className="nav-link">
                  HOME
                </Link>
              </li>
              <li id="about">
                <Link to="/about" className="nav-link">
                  ABOUT
                </Link>
              </li>

              <li id="skills">
                <Link to="/skills" className="nav-link">
                  SKILLS
                </Link>
              </li>

              <li id="contact">
                <Link to="/contact" className="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
