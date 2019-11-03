import React from "react";
import propTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";
import noCover from "../images/no-cover-available.png";

const Book = ({ book, changeShelf }) => {
  // fix data
  const rating = isNaN(book.averageRating)
    ? "0"
    : book.averageRating.toString().replace(".", "");
  const coverImage =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : noCover;
  const title = book.title ? book.title : "No title available";

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            backgroundSize: "cover",
            backgroundImage: `url("${coverImage}")`
          }}
        ></div>
        <div className="book-info">
          <div className="book-title">
            <h5 title={title}>{title}</h5>
          </div>
          <div className="book-authors">
            {book.authors &&
              book.authors.map((author, index) => (
                <div key={index}>{author}</div>
              ))}
          </div>
          <div className="book-rating">
            <span className={`stars-container stars-${rating}`}>★★★★★</span>
          </div>
          <div className="book-description">
            {book.description && book.description.substr(0, 150)}
          </div>
        </div>
        <ShelfChanger book={book} changeShelf={changeShelf} />
      </div>
    </div>
  );
};

Book.propTypes = {
  book: propTypes.object.isRequired,
  changeShelf: propTypes.func.isRequired
};

export default Book;
