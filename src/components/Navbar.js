import React from "react";

const Navbar = () => {
  return (
    <header className="list-books-navbar">
      <div className="container">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <nav>
          <ul className="list-books-menu">
            <li>
              <a href="#currently">Currently</a>
            </li>
            <li>
              <a href="news.asp">Want</a>
            </li>
            <li>
              <a href="contact.asp">Read</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
