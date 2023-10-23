import React, { useState } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";
import { Link } from "react-router-dom";

function SearchBooks(props) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    setQuery(query);
    if (query) {
      BooksAPI.search(query, 20).then((results) => {
        if (results.error) {
          setSearchResults([]);
        } else {
          setSearchResults(results);
        }
      });
    } else {
      setSearchResults([]);
    }
  };

  const handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      handleSearch(query);
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
      <Link className="close-search" to="/">
        Close
      </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchResults.map((book) => (
            <Book
              key={book.id}
              book={book}
              onShelfChange={handleShelfChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default SearchBooks;
