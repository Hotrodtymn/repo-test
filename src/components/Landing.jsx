import react from "react";
import UndrawBooks from "../assets/Undraw_Books.svg";
import { Link } from "react-router-dom";



const Landing = () => {
  return (
    <section id="landing">
      {" "}
      <header>
        <div className="header__container">
          <h1>America's most award online library platform</h1>
          <h2>
            Find your dream book with <span className="purple">Library</span>
          </h2>
          <Link to="#features">
            <button className="btn">Browse books</button>
          </Link>
        </div>
        <figure className="header__img--wrapper">
          <img src={UndrawBooks} alt="" />
        </figure>
      </header>
    </section>
  );
};

export default Landing;
