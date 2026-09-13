import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import librarylogo from "../assets/Library.svg";

const Nav = () => {
  function openMenu() {
    document.body.classList.add("menu--open");
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="nav__container">
        {/* Logo */}
        <a href="/">
          <img src={librarylogo} alt="Library" className="logo" />
        </a>

        {/* Desktop Navigation */}
        <ul className="nav__links">
          <li className="nav__list">
            <a href="/" className="nav__link">
              Home
            </a>
          </li>

          <li className="nav__list">
            <a href="/books" className="nav__link">
              Books
            </a>
          </li>

          {/* Mobile Menu Button */}
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Shopping Cart */}
          <li className="nav__icon">
            <a href="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </a>

            <span className="cart__length">2</span>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="menu__links">
            <li className="menu__list">
              <a href="/" className="menu__link" onClick={closeMenu}>
                Home
              </a>
            </li>

            <li className="menu__list">
              <a href="/books" className="menu__link" onClick={closeMenu}>
                Books
              </a>
            </li>

            <li className="menu__list">
              <a href="/cart" className="menu__link" onClick={closeMenu}>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
