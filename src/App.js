import React, { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import GetBooks from "./components/GetBooks";
import SearchBooks from "./components/SearchBooks";

function App() {
  const [currentlyReading, setCurrentlyReading] = useState([]);
  const [wantToRead, setWantToRead] = useState([]);
  const [read, setRead] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      const currentlyReadingBooks = books.filter((book) => book.shelf === "currentlyReading");
      const wantToReadBooks = books.filter((book) => book.shelf === "wantToRead");
      const readBooks = books.filter((book) => book.shelf === "read");

      setCurrentlyReading(currentlyReadingBooks);
      setWantToRead(wantToReadBooks);
      setRead(readBooks);
    });
  }, []);

  const handleShelfChange = (book, shelf) => {
    console.log(book + " is now in shelf: " + shelf);
  };

  const [showSearchPage, setShowSearchPage] = useState(false);

  return (
    <div className="app">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      {showSearchPage ? (
        <SearchBooks
          books={[...currentlyReading, ...wantToRead, ...read]}
          onCloseSearch={() => setShowSearchPage(false)}
          onShelfChange={handleShelfChange}
        />
      ) : (
        <GetBooks
          currentlyReading={currentlyReading}
          wantToRead={wantToRead}
          read={read}
          onShelfChange={handleShelfChange}
        />
      )}
      <div className="open-search">
        <button onClick={() => setShowSearchPage(true)}></button>
      </div>
    </div>
  );
}

export default App;
