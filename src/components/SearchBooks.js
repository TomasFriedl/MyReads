import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import GetBooks from "./GetBooks";
import { Link } from "react-router-dom";

const SearchPage = ({ changeBookShelf, fetchedBooks }) => {
	const [term, setTerm] = useState("");
	const [books, setBooks] = useState([]);

	useEffect(() => {
		const searchBooks = async () => {
			if (term.length !== 0) {
				try {
					const searchedBooks = await BooksAPI.search(term);
					if (!searchedBooks.error) {
						setBooks(searchedBooks);
					} else {
						setBooks([]);
					}
				} catch (error) {
					console.error("Error searching books: ", error);
					setBooks([]);
				}
			} else {
				setBooks([]);
			}
		};
		
		const searchTimer = setTimeout(searchBooks, 300);

		return () => clearTimeout(searchTimer);
	}, [term]);

	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<Link className='close-search' to='/' />
				<div className='search-books-input-wrapper'>
					<input
						type='text'
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						placeholder='Search by title or author'
					/>
				</div>
			</div>
			<div className='search-books-results'>
				<GetBooks
					searchedBooks={books}
					fetchedBooks={fetchedBooks}
					changeBookShelf={changeBookShelf}
				/>
			</div>
		</div>
	);
};

export default SearchPage;
