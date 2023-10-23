import React, { useState } from "react";
import "./App.css";
import GetBooks from "./components/GetBooks";
import SearchBooks from "./components/SearchBooks";

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
        <button onClick={() => setShowSearchPage(true)}></button>
      </div>
    </div>
  );
}

export default App;
