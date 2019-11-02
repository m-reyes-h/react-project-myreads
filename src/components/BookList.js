import React from "react";
import propTypes from "prop-types";
import BookShelf from "./BookShelf";

const BookslIst = ({ books, changeShelf }) => {
  const shelfType = [
    { type: "currentlyReading", title: "Currently Reading" },
    { type: "wantToRead", title: "Want to Read" },
    { type: "read", title: "Read" }
  ];

  return (
    <div className="list-books-content">
      {shelfType.map(shelf => {
        const shelfBooks = books.filter(book => book.shelf === shelf.type);
        return (
          <BookShelf
            key={shelf.type}
            shelfTitle={shelf.title}
            books={shelfBooks}
            changeShelf={changeShelf}
          />
        );
      })}
    </div>
  );
};

BookslIst.propTypes = {
  books: propTypes.array.isRequired,
  changeShelf: propTypes.func.isRequired
};

export default BookslIst;
