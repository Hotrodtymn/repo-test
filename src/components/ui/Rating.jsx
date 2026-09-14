import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = !Number.isInteger(rating);

  return (
    <div className="book__ratings">
      {new Array(fullStars).fill(0).map((_, index) => (
        <FontAwesomeIcon icon={faStar} key={index} />
      ))}

      {hasHalfStar && (
        <FontAwesomeIcon icon={faStarHalfAlt} key="half-star" />
      )}
    </div>
  );
};

export default Rating;