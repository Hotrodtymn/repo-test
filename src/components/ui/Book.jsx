import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const Book = ({ book }) => {
  return (
    <div className="book">
      <a href="/">
        <figure className="book__img--wrapper">
          <img src={book.url} alt={book.title} className="book__img" />
        </figure>
      </a>

      <div className="book__title">
        <a href="/" className="book__title--link">
          {book.title}
        </a>
      </div>

      <div className="book__ratings">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStarHalfAlt} />
      </div>

      <div className="book__price">
        {book.salePrice ? (
          <>
            <span className="book__price--normal">${book.originalPrice}</span>$
            {book.salePrice}
          </>
        ) : (
          `$${book.originalPrice}`
        )}
      </div>
    </div>
  );
};

export default Book;
