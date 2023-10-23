import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import Categories from "./Categories";

function GetBooks(props) {
  const [books, setBooks] = useState([]);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    BooksAPI.getAll().then((books) => {
      if (isMounted) {
        setBooks(books);
      }
    });

    return () => {
      setIsMounted(false);
    };
  }, [isMounted]);

  const handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      const updatedBooks = [...books.filter((b) => b.id !== book.id), book];
      setBooks(updatedBooks);
    });
  };

  const currentlyReading = books.filter(
    (book) => book.shelf === "currentlyReading"
  );
  const wantToRead = books.filter((book) => book.shelf === "wantToRead");
  const read = books.filter((book) => book.shelf === "read");

  return (
    <div>
      <Categories
        title="Currently Reading"
        books={currentlyReading}
        onShelfChange={handleShelfChange}
      />
      <Categories
        title="Want to Read"
        books={wantToRead}
        onShelfChange={handleShelfChange}
      />
      <Categories title="Read" books={read} onShelfChange={handleShelfChange} />
    </div>
  );
}

export default GetBooks;
