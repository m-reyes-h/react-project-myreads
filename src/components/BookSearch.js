import React, { Component } from "react";
import BookSearchNavbar from "./BookSearchNavbar";
import * as DB from "../data/BooksAPI";
import Book from "./Book";
import propTypes from "prop-types";

class BookSearch extends Component {
  state = {
    searchTerm: "",
    books: [],
    loading: false,
    error: false
  };

  changeTerms = term => {
    this.setState({ searchTerm: term });
    this.searchBooks(term);
  };

  searchBooks = term => {
    const query = term.trim();

    if (!query.length) {
      return this.setState(() => ({ books: [], loading: false, error: false }));
    }

    this.setState(() => ({ loading: true }));

    DB.search(query, 20)
      .then(books => {
        this.setState(() => ({ books, loading: false, error: false }));
      })
      .catch(err => {
        this.setState(() => ({ error: true }));
      })
      .finally(() => {
        if (!this.state.searchTerm.trim().length) {
          this.setState(() => ({ books: [] }));
        }
        this.setState(() => ({ loading: false }));
      });
  };

  render() {
    const { books, searchTerm } = this.state;

    return (
      <div className="search-books">
        <BookSearchNavbar changeTerms={this.changeTerms} />
        {this.state.loading ? (
          <p className="search-books-info">Loding...</p>
        ) : (
          <div>
            {books.length > 0 && (
              <div className="search-books-results">
                <div className="container">
                  <p>{books.length} books found</p>
                  <ol className="books-grid">
                    {books.map(book => (
                      <li key={book.id}>
                        <Book
                          books={this.props.books}
                          book={book}
                          changeShelf={this.props.changeShelf}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}
            {books.error && searchTerm.trim().length > 0 && (
              <h3 className="search-books-info">
                Search <span className="tag">{searchTerm}</span> did not return
                any books. Please try again!
              </h3>
            )}
          </div>
        )}
      </div>
    );
  }

  static propTypes = {
    changeShelf: propTypes.func.isRequired
  };
}

export default BookSearch;
