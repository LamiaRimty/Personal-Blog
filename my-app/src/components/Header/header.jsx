import "./header.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div class="header navbar navbar-nav navbar-expand-lg navbar-dark ">
        <div class="container">
          <div class="navbar-header">
            <p class="navbar-brand">
              <img
                className="img"
                src="https://media.licdn.com/dms/image/C4E03AQFjkJ8sh7Ywaw/profile-displayphoto-shrink_200_200/0/1660130720842?e=1681344000&v=beta&t=sPzIr8wqev46_zVWyDzPlOMcLSmxhcNEguzDrL3PAmk"
                alt="rimty"
              />
              Memoir
              <Link to="/"></Link>
            </p>
          </div>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="nav navbar-nav ms-auto ">
              <li id="home">
                <Link to="/" class="nav-link">
                  HOME
                </Link>
              </li>
              <li id="about">
                <Link to="/about" class="nav-link">
                  ABOUT
                </Link>
              </li>

              <li id="skills">
                <Link to="/skills" class="nav-link">
                  SKILLS
                </Link>
              </li>

              <li id="contact">
                <Link to="/contact" class="nav-link">
                  CONTACT
                </Link>
              </li>
            </ul>
            <i className="fas fa-search"></i>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div id="search-spinner" aria-hidden hidden={true} />
              <div className="sr-only" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>

      <section></section>
    </>
  );
}

export default Header;
