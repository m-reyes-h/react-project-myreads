import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button
                title="Back"
                className="close-search"
                onClick={() => this.setState({ showSearchPage: false })}
              >
                Close
              </button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" autoFocus placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
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
                    <li>
                      <a href="about.asp">About</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </header>

            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <div className="container">
                    <h2 className="bookshelf-title" id="currently">
                      Currently Reading
                    </h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
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
                                  <h5 title="To Kill a Mockingbird">
                                    To Kill a Mockingbird
                                  </h5>
                                </div>
                                <div className="book-authors">Harper Lee</div>
                                <div className="book-rating">
                                  <span className="stars-container stars-45">
                                    ★★★★★
                                  </span>
                                  <span className="count">(3037)</span>
                                </div>
                                <div className="book-description">
                                  You've experienced the shiny, point-and-click
                                  surface of your Linux computer—now dive below
                                  and explore its depths with the power of the
                                  command line. The Linux Command Line takes you
                                  from your very first terminal keystrokes to
                                  writing full programs in Bash, the most
                                  popular Linux shell. Along the way you'll
                                  learn the timeless skills handed down by
                                  generations of gray-bearded
                                </div>
                              </div>
                              <div className="book-shelf-changer" title="Move to...">
                                <select>
                                  <option value="move" disabled>
                                    Move to...
                                  </option>
                                  <option value="currentlyReading">
                                    Currently Reading
                                  </option>
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
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
                                  <span className="stars-container stars-45">
                                    ★★★★★
                                  </span>
                                </div>
                                <div className="book-description">
                                  You've experienced the shiny, point-and-click
                                  surface of your Linux computer—now dive below
                                  and explore its depths with the power of the
                                  command line. The Linux Command Line takes you
                                  from your very first terminal keystrokes to
                                  writing full programs in Bash, the most
                                  popular Linux shell. Along the way you'll
                                  learn the timeless skills handed down by
                                  generations of gray-bearded
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
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
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
                                  <span className="stars-container stars-45">
                                    ★★★★★
                                  </span>
                                </div>
                                <div className="book-description">
                                  You've experienced the shiny, point-and-click
                                  surface of your Linux computer—now dive below
                                  and explore its depths with the power of the
                                  command line. The Linux Command Line takes you
                                  from your very first terminal keystrokes to
                                  writing full programs in Bash, the most
                                  popular Linux shell. Along the way you'll
                                  learn the timeless skills handed down by
                                  generations of gray-bearded
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
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
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
                {/* shelf1 */}
                <div className="bookshelf">
                  <div className="container">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
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
                                  To Kill a Mockingbird s dfsdf sdfs
                                </div>
                                <div className="book-authors">Harper Lee</div>
                                <div className="book-description">
                                  You've experienced the shiny, point-and-click
                                  surface of your Linux computer—now dive below
                                  and explore its depths with the power of the
                                  command line. The Linux Command Line takes you
                                  from your very first terminal keystrokes to
                                  writing full programs in Bash, the most
                                  popular Linux shell. Along the way you'll
                                  learn the timeless skills handed down by
                                  generations of gray-bearded
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
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
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
                {/* shelf1 */}
                <div className="bookshelf">
                  <div className="container">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                      <ol className="books-grid">
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
                                  To Kill a Mockingbird s dfsdf sdfs
                                </div>
                                <div className="book-authors">Harper Lee</div>
                                <div className="book-description">
                                  You've experienced the shiny, point-and-click
                                  surface of your Linux computer—now dive below
                                  and explore its depths with the power of the
                                  command line. The Linux Command Line takes you
                                  from your very first terminal keystrokes to
                                  writing full programs in Bash, the most
                                  popular Linux shell. Along the way you'll
                                  learn the timeless skills handed down by
                                  generations of gray-bearded
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
                                  <option value="wantToRead">
                                    Want to Read
                                  </option>
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
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>
                Add a book
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
