import React from "react";
import Book from "./Book";

const Bookshelf = ({ fetchedBooks, shelfTitle, onShelfChange }) => {
	return (
		<div className='bookshelf'>
			<h2 className='bookshelf-title'>{shelfTitle}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{fetchedBooks.map((fetchedBook) => (
						<Book
							key={fetchedBook.id}
							book={fetchedBook}
							onShelfChange={onShelfChange}
						/>
					))}
				</ol>
			</div>
		</div>
	);
};

export default Bookshelf;
