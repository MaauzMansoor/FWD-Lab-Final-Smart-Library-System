import React from 'react';
import BookCard from './BookCard';
import './BookList.css';

/**
 * BookList Component
 * Displays all books in a responsive grid layout
 * Shows appropriate message when no books are available
 */
function BookList({ books, onDeleteBook }) {
  // Display message if no books are available
  if (books.length === 0) {
    return (
      <div className="no-books">
        <div className="no-books-icon">📚</div>
        <h3>No books in the library yet</h3>
        <p>Add your first book using the form above!</p>
      </div>
    );
  }

  return (
    <div className="book-list">
      {/* Map through books array and render BookCard for each book */}
      {books.map((book) => (
        <BookCard
          key={book._id}
          book={book}
          onDelete={onDeleteBook}
        />
      ))}
    </div>
  );
}

export default BookList;
