import React from "react";
import propTypes from "prop-types";

const ShelfChanger = ({ book, changeShelf }) => {
  const onChangeShelf = newShelf => {
    changeShelf(book, newShelf);
  };

  return (
    <div className="book-shelf-changer" title="Move to...">
      <select
        // setting default value prevents to change the book's shelf to
        // the same shelf it is currently in
        defaultValue={book.shelf}
        onChange={event => {
          onChangeShelf(event.target.value);
        }}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

ShelfChanger.propTypes = {
  book: propTypes.object.isRequired,
  changeShelf: propTypes.func.isRequired
};

export default ShelfChanger;
