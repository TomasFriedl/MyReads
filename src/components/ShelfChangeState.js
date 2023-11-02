import React from "react";
import PropTypes from "prop-types";

function ShelfChangeState(props) {
  const { book, onShelfChange } = props;
  const handleShelfChange = (event) => {
    const newShelf = event.target.value;
    onShelfChange(book, newShelf);
  };

  return (
    <div className="book-shelf-changer">
      <select id={`shelf-${book.id}`} value={book.shelf || "none"} onChange={handleShelfChange}>
        <option disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

ShelfChangeState.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default ShelfChangeState;
