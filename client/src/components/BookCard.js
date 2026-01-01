import React, { useState } from 'react';
import './BookCard.css';

/**
 * BookCard Component
 * Displays individual book information in a card format
 * Includes delete functionality with confirmation
 */
function BookCard({ book, onDelete }) {
  // State to manage delete confirmation
  const [showConfirm, setShowConfirm] = useState(false);

  /**
   * Handle delete button click
   * Shows confirmation dialog before deleting
   */
  const handleDeleteClick = () => {
    setShowConfirm(true);
  };

  /**
   * Confirm deletion
   * Calls parent's delete function
   */
  const confirmDelete = () => {
    onDelete(book._id);
    setShowConfirm(false);
  };

  /**
   * Cancel deletion
   * Hides confirmation dialog
   */
  const cancelDelete = () => {
    setShowConfirm(false);
  };

  return (
    <div className="book-card">
      {/* Book Icon */}
      <div className="book-icon">📖</div>

      {/* Book Information */}
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>

        <div className="book-details">
          <p className="book-author">
            <span className="label">Author:</span>
            <span className="value">{book.author}</span>
          </p>

          <p className="book-isbn">
            <span className="label">ISBN:</span>
            <span className="value">{book.isbn}</span>
          </p>

          <p className="book-year">
            <span className="label">Year:</span>
            <span className="value">{book.year}</span>
          </p>
        </div>
      </div>

      {/* Delete Button and Confirmation */}
      <div className="book-actions">
        {!showConfirm ? (
          <button
            onClick={handleDeleteClick}
            className="delete-btn"
            title="Delete this book"
          >
            🗑️ Delete
          </button>
        ) : (
          <div className="confirm-delete">
            <p className="confirm-text">Delete this book?</p>
            <div className="confirm-buttons">
              <button onClick={confirmDelete} className="confirm-yes">
                Yes
              </button>
              <button onClick={cancelDelete} className="confirm-no">
                No
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookCard;
