import React, { useState, useEffect, useRef } from "react";
import * as BooksAPI from "../BooksAPI";
import Book from "./Book";

function SearchBooks(props) {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchResultsRef = useRef(searchResults);
  
  useEffect(() => {
    searchResultsRef.current = searchResults;
  }, [searchResults]);

  const handleSearch = (query) => {
    setQuery(query);
    if (query) {
      BooksAPI.search(query, 20).then((results) => {
        if (results.error) {
          setSearchResults([]);
        } else {
          BooksAPI.getAll().then((books) => {
            const updatedResults = results.map((result) => {
              const matchedBook = books.find((book) => book.id === result.id);
              if (matchedBook) {
                return { ...result, shelf: matchedBook.shelf };
              }
              return { ...result, shelf: 'none' };
            });
            setSearchResults(updatedResults);
          });
        }
      });
    } else {
      setSearchResults([]);
    }
  };  
  
  const handleShelfChange = (book, shelf) => {
    shelf = shelf || 'none';
    BooksAPI.update(book, shelf).then(() => {
      const updatedResults = searchResults.map((result) => {
        if (result.id === book.id) {
          return { ...result, shelf };
        }
        return result;
      });
      setSearchResults(updatedResults);
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <div className="close-search" onClick={props.onCloseSearch}>
        </div>
        <div className="search-books-input-wrapper">
          <input
            id="search"
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
