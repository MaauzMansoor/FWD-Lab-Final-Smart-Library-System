const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

/**
 * @route   GET /api/books
 * @desc    Get all books from the database
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    // Fetch all books from database, sorted by creation date (newest first)
    const books = await Book.find().sort({ createdAt: -1 });

    // Send books array as JSON response
    res.json(books);
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({
      message: 'Failed to fetch books',
      error: error.message
    });
  }
});

/**
 * @route   POST /api/books
 * @desc    Add a new book to the database
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    // Extract book data from request body
    const { title, author, isbn, year } = req.body;

    // Validate required fields
    if (!title || !author || !isbn || !year) {
      return res.status(400).json({
        message: 'All fields are required (title, author, isbn, year)'
      });
    }

    // Create new book document
    const newBook = new Book({
      title,
      author,
      isbn,
      year: parseInt(year),
    });

    // Save book to database
    const savedBook = await newBook.save();

    // Send created book as response with 201 status
    res.status(201).json(savedBook);
  } catch (error) {
    console.error('Error adding book:', error);

    // Handle duplicate ISBN error
    if (error.code === 11000) {
      return res.status(400).json({
        message: 'A book with this ISBN already exists'
      });
    }

    // Handle validation errors
    if (error.name === 'ValidationError') {
      return res.status(400).json({
        message: 'Validation error',
        error: error.message
      });
    }

    // Handle other errors
    res.status(500).json({
      message: 'Failed to add book',
      error: error.message
    });
  }
});

/**
 * @route   DELETE /api/books/:id
 * @desc    Delete a book by its ID
 * @access  Public
 */
router.delete('/:id', async (req, res) => {
  try {
    // Extract book ID from URL parameters
    const { id } = req.params;

    // Find and delete the book by ID
    const deletedBook = await Book.findByIdAndDelete(id);

    // If book not found, return 404 error
    if (!deletedBook) {
      return res.status(404).json({
        message: 'Book not found'
      });
    }

    // Send success message with deleted book data
    res.json({
      message: 'Book deleted successfully',
      book: deletedBook
    });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({
      message: 'Failed to delete book',
      error: error.message
    });
  }
});

module.exports = router;
