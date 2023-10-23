import React from "react";
import Shelf from "./Shelf";

const Shelves = ({ books, onShelfChange }) => {
	const shelves = {
		currentlyReading: "Currently Reading",
		wantToRead: "Want to Read",
		read: "Read",
	};

	const renderedShelves = Object.keys(shelves).map((shelf) => (
		<Shelf
			key={shelf}
			fetchedBooks={books.filter((book) => book.shelf === shelf)}
			shelfTitle={shelves[shelf]}
			onShelfChange={onShelfChange}
		/>
	));

	return <div className='list-books-content'>{renderedShelves}</div>;
};

export default Shelves;
