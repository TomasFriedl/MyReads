import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Categories from "./components/Categories";
import SearchBooks from "./components/SearchBooks";

const BooksApp = () => {
	const [fetchedBooks, setFetchedBooks] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await BooksAPI.getAll();
				if (!response.error) {
					setFetchedBooks(response);
				} else {
					console.error("Failed to fetch books:", response.error);
				}
			} catch (error) {
				console.error("Error fetching books:", error);
			}
		};
		fetchData();
	}, []);

	const changeBookShelf = (book, shelf) => {
		BooksAPI.update(book, shelf).then(() => {
			if (shelf === "none") {
				setFetchedBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
			} else {
				book.shelf = shelf;
				setFetchedBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id).concat(book));
			}
		}).catch((error) => {
			console.error("Error updating book shelf:", error);
		});
	};

	return (
		<Router>
			<div className='app'>
				<Switch>
					<Route exact path='/search'>
						<SearchBooks changeBookShelf={changeBookShelf} fetchedBooks={fetchedBooks} />
					</Route>
					<Route exact path='/'>
						<div className='list-books'>
							<div className='list-books-title'>
								<h1>MyReads</h1>
							</div>
							<Categories books={fetchedBooks} onShelfChange={changeBookShelf} />
							<div className='open-search'>
								<Link className="open-search a" to='/search'></Link>
							</div>
						</div>
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default BooksApp;
