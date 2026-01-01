const mongoose = require('mongoose');

/**
 * Mongoose Schema for Book entity
 * Defines the structure and validation rules for book documents
 */
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true,
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true,
  },
  isbn: {
    type: String,
    required: [true, 'ISBN number is required'],
    unique: true,
    trim: true,
  },
  year: {
    type: Number,
    required: [true, 'Publication year is required'],
    min: [1000, 'Year must be valid'],
    max: [new Date().getFullYear(), 'Year cannot be in the future'],
  },
}, {
  // Automatically add createdAt and updatedAt timestamps
  timestamps: true,
});

/**
 * Create and export the Book model
 */
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
