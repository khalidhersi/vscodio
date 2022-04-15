import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
        <Link to="/about" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-sass" id="sass" />
          <Link to="/about" className="navbar__menu__item">
            About.scss
          </Link>
        </Link>
        <Link to="/skills" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-react fa-spin" id="react" />
          <Link to="/skills" className="navbar__menu__item">
            Skills.jsx
          </Link>
        </Link>
        <Link to="/vscodefolio/" className="navbar__menu__list" id="home">
          <i className="navbar__menu__icon fas fa-home" />
        </Link>
        <Link to="/projects" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-npm" id="json" />
          <Link to="/projects" className="navbar__menu__item">
            Projects.json
          </Link>
        </Link>
        <Link to="/Experiences" className="navbar__menu__list">
          <i className="navbar__menu__icon fab fa-markdown" id="markdown" />
          <Link to="/Experiences" className="navbar__menu__item">
            Experiences.md
          </Link>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;