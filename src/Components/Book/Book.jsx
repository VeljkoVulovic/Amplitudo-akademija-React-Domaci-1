import React from "react";
import Image from "../Image/Image";
import "./Book.css";

const Book = ({ title, year, author, image, quote }) => {
  return (
    <div className="book-card">
      <div>
        <Image src={image} />
      </div>
      <div>
        <h4>{title}</h4>
      </div>
      <div className="book-info">
        <div>
          <b>Year:</b> <i>{year}</i>
        </div>
        <div>
          <b>Author:</b> {author}
        </div>
        <div>
          <b>Quote:</b> {quote}
        </div>
      </div>
    </div>
  );
};

export default Book;
