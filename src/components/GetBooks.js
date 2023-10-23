import React from "react";
import Book from "./Book";

const GetBooks = ({ searchedBooks, fetchedBooks, changeBookShelf }) => {
	return (
		<ol className='books-grid'>
			{searchedBooks.length > 0 &&
				searchedBooks.map((book) => {
					const bookShelf = fetchedBooks.find(
						(foundShelfBook) => foundShelfBook.id === book.id
					);
					bookShelf ? (book.shelf = bookShelf.shelf) : (book.shelf = "none");
					return (
						<Book
							key={book.id}
							book={book}
							onShelfChange={changeBookShelf}
						/>
					);
				})}
			{searchedBooks.length === 0 && <h1>Sorry, no books found</h1>}
		</ol>
	);
};

export default GetBooks;
