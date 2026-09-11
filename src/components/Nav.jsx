import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import librarylogo from '../assets/Library.svg';

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src={LibraryLogo} alt ="" className="logo" />
        </a>
        <ul className="nav__links">
          <li classname="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>
          <li classname="nav__list">
            <a href="/" className="nav__link">
              Books
            </a>
          </li>
          <button className="btn__menu">
            <fontawesomeIcon icon="bars" />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
