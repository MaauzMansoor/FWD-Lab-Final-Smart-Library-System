import React, { useState } from 'react';
import './BookForm.css';

/**
 * BookForm Component
 * Provides a form interface for adding new books to the library
 * Includes validation and user feedback
 */
function BookForm({ onAddBook }) {
  // Form state management - stores input values
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
    year: ''
  });

  // State to track form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handle input field changes
   * Updates form state as user types
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  /**
   * Handle form submission
   * Validates data and calls parent callback to add book
   */
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Validate that all fields are filled
    if (!formData.title || !formData.author || !formData.isbn || !formData.year) {
      alert('Please fill in all fields');
      return;
    }

    // Validate year is a valid number
    const yearNum = parseInt(formData.year);
    const currentYear = new Date().getFullYear();

    if (isNaN(yearNum) || yearNum < 1000 || yearNum > currentYear) {
      alert(`Please enter a valid year between 1000 and ${currentYear}`);
      return;
    }

    setIsSubmitting(true);

    // Call parent component's add book function
    const success = await onAddBook(formData);

    setIsSubmitting(false);

    // Reset form if book was added successfully
    if (success) {
      setFormData({
        title: '',
        author: '',
        isbn: '',
        year: ''
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      {/* Book Title Input */}
      <div className="form-group">
        <label htmlFor="title">Book Title *</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter book title"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Author Name Input */}
      <div className="form-group">
        <label htmlFor="author">Author Name *</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter author name"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* ISBN Number Input */}
      <div className="form-group">
        <label htmlFor="isbn">ISBN Number *</label>
        <input
          type="text"
          id="isbn"
          name="isbn"
          value={formData.isbn}
          onChange={handleChange}
          placeholder="Enter ISBN number"
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Publication Year Input */}
      <div className="form-group">
        <label htmlFor="year">Publication Year *</label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
          placeholder="Enter publication year"
          min="1000"
          max={new Date().getFullYear()}
          required
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="submit-btn"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Adding Book...' : 'Add Book to Library'}
      </button>
    </form>
  );
}

export default BookForm;
