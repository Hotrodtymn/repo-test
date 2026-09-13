import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/">
          <img src={librarylogo} alt="Library" className="logo" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              Home
            </Link>
          </li>

          <li className="nav__list">
            <Link to="/books" className="nav__link">
              Books
            </Link>
          </li>

          {/* Mobile Menu Button */}
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>

          {/* Shopping Cart */}
          <li className="nav__icon">
            <Link to="/cart" className="nav__link">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>

            <span className="cart__length">2</span>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="menu__backdrop">
          <button
            className="btn__menu btn__menu--close"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>

          <ul className="menu__links">
            <li className="menu__list">
              <Link
                to="/"
                className="menu__link"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            <li className="menu__list">
              <Link
                to="/books"
                className="menu__link"
                onClick={closeMenu}
              >
                Books
              </Link>
            </li>

            <li className="menu__list">
              <Link
                to="/cart"
                className="menu__link"
                onClick={closeMenu}
              >
                Cart
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;