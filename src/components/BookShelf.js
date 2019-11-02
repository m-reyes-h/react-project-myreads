import React from "react";
import Book from "./Book";
import propTypes from "prop-types";

const BookShelf = ({ books, changeShelf }) => {
  return (
    <div>
      <div className="bookshelf">
        <div className="container">
          <h2 className="bookshelf-title" id="currently">
            Currently Reading
          </h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              <li>
                <Book />
              </li>
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                          'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
                      }}
                    ></div>
                    <div className="book-info">
                      <div className="book-title">
                        <h5>To Kill a Mockingbird s dfsdf sdfs</h5>
                      </div>
                      <div className="book-authors">Harper Lee</div>
                      <div className="book-rating">
                        <span className="stars-container stars-45">★★★★★</span>
                      </div>
                      <div className="book-description">
                        You've experienced the shiny, point-and-click surface of
                        your Linux computer—now dive below and explore its
                        depths with the power of the command line. The Linux
                        Command Line takes you from your very first terminal
                        keystrokes to writing full programs in Bash, the most
                        popular Linux shell. Along the way you'll learn the
                        timeless skills handed down by generations of
                        gray-bearded
                      </div>
                    </div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage:
                          'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")'
                      }}
                    ></div>
                    <div className="book-info">
                      <div className="book-title">
                        <h5>To Kill a Mockingbird s dfsdf sdfs</h5>
                      </div>
                      <div className="book-authors">Harper Lee</div>
                      <div className="book-rating">
                        <span className="stars-container stars-45">★★★★★</span>
                      </div>
                      <div className="book-description">
                        You've experienced the shiny, point-and-click surface of
                        your Linux computer—now dive below and explore its
                        depths with the power of the command line. The Linux
                        Command Line takes you from your very first terminal
                        keystrokes to writing full programs in Bash, the most
                        popular Linux shell. Along the way you'll learn the
                        timeless skills handed down by generations of
                        gray-bearded
                      </div>
                    </div>
                    <div className="book-shelf-changer">
                      <select>
                        <option value="move" disabled>
                          Move to...
                        </option>
                        <option value="currentlyReading">
                          Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  books: propTypes.array.isRequired,
  changeShelf: propTypes.func.isRequired
};

export default BookShelf;
