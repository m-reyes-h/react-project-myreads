import React from "react";
import Book from "./Book";
import propTypes from "prop-types";

const BookShelf = ({ books, changeShelf, shelfTitle }) => {
  return (
    <div>
      <div className="bookshelf">
        <div className="container">
          <h2 className="bookshelf-title">{shelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map(book => (
                <li key={book.id}>
                  <Book book={book} books={books} changeShelf={changeShelf} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: propTypes.array.isRequired,
  changeShelf: propTypes.func.isRequired,
  shelfTitle: propTypes.string.isRequired
};

export default BookShelf;
