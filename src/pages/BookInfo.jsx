import React from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import Price from "../components/ui/Price";
import Rating from "../components/ui/Rating";
import Book from "../components/ui/Book";

const BookInfo = ({ books }) => {
  const { id } = useParams();

  const book = books.find((book) => book.id === Number(id));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon={faArrowLeft} />
                <span>Back to Books</span>
              </Link>
            </div>

            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  src={book.url}
                  alt={book.title}
                  className="book__selected--img"
                />
              </figure>

              <div className="book__selected--info">
                <h2>{book.title}</h2>

                <Rating rating={book.rating} />

                <Price book={book} />

                <p>{book.description}</p>
              </div>

              <div className="book__summary">
                <div className="book__summary--title">
                  Summary
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste aliquid laborum aliquam, est aperiam veritatis quos
                    earum corrupti temporibus reprehenderit facere cupiditate,
                    exercitationem eveniet perspiciatis sint neque esse magnam!
                    Quidem!
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iste aliquid laborum aliquam, est aperiam veritatis quos
                    earum corrupti temporibus reprehenderit facere cupiditate,
                    exercitationem eveniet perspiciatis sint neque esse magnam!
                    Quidem!
                  </p>
                </div>

                <button className="btn" type="button">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>

            <div className="books">
              {books
                .filter((book) => book.rating === 5 && book.id !== Number(id))
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
