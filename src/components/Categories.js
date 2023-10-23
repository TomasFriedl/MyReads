import React from "react";
import Book from "./Book";

function Categories(props) {
  const { title, books, onShelfChange } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book key={book.id} book={book} onShelfChange={onShelfChange} />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Categories;
