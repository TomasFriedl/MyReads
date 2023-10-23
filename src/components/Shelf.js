import React from "react";
import Book from "./Book";

const Bookshelf = ({ fetchedBooks, shelfTitle, onShelfChange }) => (
	<div className='bookshelf'>
		<h2 className='bookshelf-title'>{shelfTitle}</h2>
		<div className='bookshelf-books'>
			<ol className='books-grid'>
				{fetchedBooks.map((book) => (
					<Book key={book.id} book={book} onShelfChange={onShelfChange} />
				))}
			</ol>
		</div>
	</div>
);

export default Bookshelf;
