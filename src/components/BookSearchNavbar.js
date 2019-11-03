import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

const BookSearchNavbar = ({ changeTerms }) => {
  return (
    <div className="search-books-bar">
      <Link to="/" title="Back" className="close-search">
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          autoFocus
          placeholder="Search by title or author"
          onChange={event => changeTerms(event.target.value)}
        />
      </div>
    </div>
  );
};

BookSearchNavbar.propTypes = {
  changeTerms: propTypes.func.isRequired
};

export default BookSearchNavbar;
