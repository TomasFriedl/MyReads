import React from "react";
import ShelfChangeState from "./ShelfChangeState";

function Book(props) {
  const { book, onShelfChange } = props;
  const authors = book.authors || [];
  const thumbnailUrl = book.imageLinks ? book.imageLinks.thumbnail : '';

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${thumbnailUrl})`,
              backgroundColor: thumbnailUrl ? 'transparent' : 'white', // Bílý obrázek, pokud thumbnail není definován
            }}
          ></div>
          <ShelfChangeState book={book} onShelfChange={onShelfChange} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{authors.join(", ")}</div>
      </div>
    </li>
  );
}

export default Book;
