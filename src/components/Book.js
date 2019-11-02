import React from "react";
import propTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

const Book = ({ book, changeShelf }) => {
  const fixStars = rating => {
    return isNaN(rating) ? "0" : rating.toString().replace(".", "");
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            backgroundSize: "cover",
            backgroundImage: `url("${book.imageLinks.thumbnail}")`
          }}
        ></div>
        <div className="book-info">
          <div className="book-title">
            <h5 title={book.title}>{book.title}</h5>
          </div>
          <div className="book-authors">
            {book.authors.map((author, index) => (
              <div key={index}>{author}</div>
            ))}
          </div>
          <div className="book-rating">
            <span
              className={`stars-container stars-${fixStars(
                book.averageRating
              )}`}
            >
              ★★★★★
            </span>
          </div>
          <div className="book-description">
            {book.description.substr(0, 150)}
          </div>
        </div>
        <ShelfChanger />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: propTypes.object.isRequired,
  changeShelf: propTypes.func.isRequired
};

export default Book;
