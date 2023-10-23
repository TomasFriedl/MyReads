import React from "react";
import ShelfChangeState from "./ShelfChangeState";

const Book = ({ book, onShelfChange }) => {
	const { title, authors, imageLinks, id } = book;
	const thumbnail = imageLinks ? imageLinks.thumbnail : "";

	return (
		<li key={id}>
			<div className='book'>
				<div className='book-top'>
					<div
						className='book-cover'
						style={{
							width: 128,
							height: 193,
							backgroundImage: `url(${thumbnail})`,
						}}
					/>
					<ShelfChangeState book={book} onShelfChange={onShelfChange} />
				</div>
				<div className='book-title'>{title ? title : ""}</div>
				<div className='book-authors'>{authors ? authors : ""}</div>
			</div>
		</li>
	);
};

export default Book;
