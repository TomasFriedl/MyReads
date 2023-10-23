import React, { useState, useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import GetBooks from "./GetBooks";
import { Link } from "react-router-dom";

const SearchBooks = ({ changeShelf, books }) => {
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = async (term) => {
		try {
			const response = await BooksAPI.search(term);
			if (response && !response.error) {
				setSearchResults(response);
			} else {
				setSearchResults([]);
			}
		} catch (error) {
			console.error("Error searching books: ", error);
			setSearchResults([]);
		}
	};

	const delayedSearch = (term) => {
		const searchTimer = setTimeout(() => {
			handleSearch(term);
		}, 300);
		return () => clearTimeout(searchTimer);
	};

	useEffect(() => {
		if (searchTerm.trim() === "") {
			setSearchResults([]);
		} else {
			return delayedSearch(searchTerm);
		}
	}, [searchTerm]);

	return (
		<div className='search-books'>
			<div className='search-books-bar'>
				<Link className='close-search' to='/' />
				<div className='search-books-input-wrapper'>
					<input
						type='text'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						placeholder='Search by title or author'
					/>
				</div>
			</div>
			<div className='search-books-results'>
				<GetBooks
					searchedBooks={searchResults}
					books={books}
					changeShelf={changeShelf}
				/>
			</div>
		</div>
	);
};

export default SearchBooks;
