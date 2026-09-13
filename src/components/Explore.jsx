import react from "react";

const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Books</span>
          </h2>

          <a href="/books" className="btn">
            Explore books
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore;
