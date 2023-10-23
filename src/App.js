import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Categories from "./components/Categories";
import SearchBooks from "./components/SearchBooks";

const MyReads = () => {

	const [books, setBooks] = useState([]);

	const updateBookShelf = (updatedBook, newShelf) => {
		BooksAPI.update(updatedBook, newShelf)
			.then(() => {
				if (newShelf === "none") {
					setBooks((prevBooks) => prevBooks.filter((book) => book.id !== updatedBook.id));
				} else {
					updatedBook.shelf = newShelf;
					setBooks((prevBooks) => [...prevBooks.filter((book) => book.id !== updatedBook.id), updatedBook]);
				}
			})
			.catch((error) => {
				console.error("Error updating book shelf:", error);
			});
	};

	useEffect(() => {
		const fetchBooks = async () => {
			try {
				const response = await BooksAPI.getAll();
				if (response && !response.error) {
					setBooks(response);
				} else {
					console.error("Failed to fetch books:", response.error);
				}
			} catch (error) {
				console.error("Error fetching books:", error);
			}
		};
		fetchBooks();
	}, []);

	return (
		<Router>
			<div className="app">
				<Switch>
					<Route exact path="/search">
						<SearchBooks changeBookShelf={updateBookShelf} fetchedBooks={books} />
					</Route>
					<Route exact path="/">
						<div className="list-books">
							<div className="list-books-title">
								<h1>MyReads</h1>
							</div>
							<Categories books={books} onShelfChange={updateBookShelf} />
							<div className="open-search">
								<Link className="open-search a" to="/search"></Link>
							</div>
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default MyReads;
