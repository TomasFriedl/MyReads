import React, { useState } from "react";
import "./App.css";
import GetBooks from "./components/GetBooks";
import SearchBooks from "./components/SearchBooks";
import { Link } from "react-router-dom";

function App() {
  const [showSearchPage, setShowSearchPage] = useState(false);

  const handleShelfChange = (book, shelf) => {
    console.log(book+" is now in shelf: "+shelf);
  };

  return (
    <div className="app">
      <div className="list-books-title">
			  <h1>MyReads</h1>
			</div>
      {showSearchPage ? (
        <SearchBooks
          onCloseSearch={() => setShowSearchPage(false)}
          onShelfChange={handleShelfChange}
        />
      ) : (
        <GetBooks onShelfChange={handleShelfChange} />
      )}
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default App;
