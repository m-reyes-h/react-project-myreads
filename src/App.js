import React from "react";
import "./App.css";
import * as DB from "./data/BooksAPI";
import { Route, Link } from "react-router-dom";
import BookslIst from "./components/BookList";
import BookSearch from "./components/BookSearch";
import Navbar from "./components/Navbar";

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount = () => {
    DB.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  };

  changeShelf = (book, shelf) => {
    DB.update(book, shelf).then(res => {
      // set book new shelf
      book.shelf = shelf;
      this.setState(prevState => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }));
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <Navbar />

              <BookslIst
                books={this.state.books}
                changeShelf={this.changeShelf}
              />

              <div className="open-search">
                <Link to="/search" className="open-search-link">
                  Add a book
                </Link>
              </div>
            </div>
          )}
        ></Route>

        <Route
          path="/search"
          render={() => (
            <BookSearch
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default BooksApp;
