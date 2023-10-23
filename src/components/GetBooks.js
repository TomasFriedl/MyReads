import React from "react";
import Book from "./Book";

const GetBooks = ({ searchedBooks, fetchedBooks, changeBookShelf }) => {
	const renderBooks = searchedBooks.map((book) => {
		const foundBook = fetchedBooks.find((fetchedBook) => fetchedBook.id === book.id);
		const shelf = foundBook ? foundBook.shelf : "none";
		return (
			<Book
				key={book.id}
				book={{ ...book, shelf }}
				onShelfChange={changeBookShelf}
			/>
		);
	});

	return (
		<ol className='books-grid'>
			{searchedBooks.length > 0 ? (
				renderBooks
			) : (
				<h1>Sorry, no books found</h1>
			)}
		</ol>
	);
};

export default GetBooks;
