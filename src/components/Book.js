import React from "react";
import propTypes from "prop-types";
import ShelfChanger from "./ShelfChanger";

const Book = ({ books, changeShelf }) => {
  return (
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
            <h5 title="To Kill a Mockingbird">To Kill a Mockingbird</h5>
          </div>
          <div className="book-authors">Harper Lee</div>
          <div className="book-rating">
            <span className="stars-container stars-45">★★★★★</span>
            <span className="count">(3037)</span>
          </div>
          <div className="book-description">
            You've experienced the shiny, point-and-click surface of your Linux
            computer—now dive below and explore its depths with the power of the
            command line. The Linux Command Line takes you from your very first
            terminal keystrokes to writing full programs in Bash, the most
            popular Linux shell. Along the way you'll learn the timeless skills
            handed down by generations of gray-bearded
          </div>
        </div>
        <ShelfChanger />
      </div>
    </div>
  );
};

Book.propTypes = {
  books: propTypes.array.isRequired,
  changeShelf: propTypes.func.isRequired
};

export default Book;
