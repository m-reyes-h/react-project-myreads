import React, { Component } from "react";
import BookSearchNavbar from "./BookSearchNavbar";

class BookSearch extends Component {
  state = {
    searchTerm: ""
  };

  render() {
    return (
      <div className="search-books">
        <BookSearchNavbar />
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default BookSearch;
