import React from "react";
import Shelf from "./Shelf";

const Shelves = ({ books, onShelfChange }) => {
	const currentlyReading = books.filter(
		(fetchedBook) => fetchedBook.shelf === "currentlyReading"
	);
	const wantToRead = books.filter(
		(fetchedBook) => fetchedBook.shelf === "wantToRead"
	);
	const read = books.filter((fetchedBook) => fetchedBook.shelf === "read");
	return (
		<div className='list-books-content'>
			<div>
				<Shelf
					fetchedBooks={currentlyReading}
					shelfTitle='Currently Reading'
					onShelfChange={onShelfChange}
				/>
				<Shelf
					fetchedBooks={wantToRead}
					shelfTitle='Want to Read'
					onShelfChange={onShelfChange}
				/>
				<Shelf
					fetchedBooks={read}
					shelfTitle='Read'
					onShelfChange={onShelfChange}
				/>
			</div>
		</div>
	);
};

export default Shelves;
