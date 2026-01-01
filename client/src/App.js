import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import './App.css';

/**
 * Main App Component - Smart Library System
 * Manages the overall application state and coordinates between components
 */
function App() {
  // State to store the list of books fetched from backend
  const [books, setBooks] = useState([]);
  
  // State to manage loading status
  const [loading, setLoading] = useState(true);
  
  // State to store and display error messages
  const [error, setError] = useState('');
  
  // State to store and display success messages
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Fetch all books from backend API on component mount
   * useEffect with empty dependency array runs once when component loads
   */
  useEffect(() => {
    fetchBooks();
  }, []);

  /**
   * Fetch books from the backend API
   * Called on component mount and after adding/deleting books
   */
  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError('');
      
      // Make GET request to fetch all books
      const response = await axios.get('http://localhost:5000/api/books');
      
      // Update state with fetched books
      setBooks(response.data);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching books:', err);
      setError('Failed to load books. Please check if the server is running.');
      setLoading(false);
    }
  };

  /**
   * Add a new book to the library
   * @param {Object} bookData - Book information (title, author, isbn, year)
   */
  const handleAddBook = async (bookData) => {
    try {
      setError('');
      setSuccessMessage('');
      
      // Make POST request to add new book
      const response = await axios.post('http://localhost:5000/api/books', bookData);
      
      // Add new book to the beginning of the books array (for immediate UI update)
      setBooks([response.data, ...books]);
      
      // Show success message
      setSuccessMessage('Book added successfully! 📚');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
      
      return true; // Indicate success to the form component
    } catch (err) {
      console.error('Error adding book:', err);
      
      // Display appropriate error message based on error response
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to add book. Please try again.');
      }
      
      // Clear error message after 5 seconds
      setTimeout(() => setError(''), 5000);
      
      return false; // Indicate failure to the form component
    }
  };

  /**
   * Delete a book from the library
   * @param {string} bookId - MongoDB ID of the book to delete
   */
  const handleDeleteBook = async (bookId) => {
    try {
      setError('');
      
      // Make DELETE request to remove book
      await axios.delete(`http://localhost:5000/api/books/${bookId}`);
      
      // Remove book from state (immediate UI update)
      setBooks(books.filter(book => book._id !== bookId));
      
      // Show success message
      setSuccessMessage('Book deleted successfully! 🗑️');
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Error deleting book:', err);
      setError('Failed to delete book. Please try again.');
      
      // Clear error message after 5 seconds
      setTimeout(() => setError(''), 5000);
    }
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="app-header">
        <div className="container">
          <h1>📚 Smart Library System</h1>
          <p>Manage your book collection efficiently</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        {/* Display success message if present */}
        {successMessage && (
          <div className="alert alert-success">
            {successMessage}
          </div>
        )}

        {/* Display error message if present */}
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {/* Book Entry Form Component */}
        <section className="form-section">
          <h2>Add New Book</h2>
          <BookForm onAddBook={handleAddBook} />
        </section>

        {/* Book List Component */}
        <section className="list-section">
          <h2>Book Collection ({books.length} {books.length === 1 ? 'book' : 'books'})</h2>
          
          {loading ? (
            <div className="loading">Loading books...</div>
          ) : (
            <BookList books={books} onDeleteBook={handleDeleteBook} />
          )}
        </section>
      </main>

      {/* Footer Section */}
      <footer className="app-footer">
        <p>&copy; 2026 Smart Library System | University of Multan Campus</p>
      </footer>
    </div>
  );
}

export default App;
