/**
 * Smart Library System - Backend Server
 * Express.js server with MongoDB integration
 * Handles book management operations (Create, Read, Delete)
 */

// Import required dependencies
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const booksRouter = require('./routes/books');

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Connect to MongoDB database
connectDB();

// Middleware configuration
// Enable CORS to allow requests from React frontend
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

/**
 * API Routes
 * All book-related endpoints are prefixed with /api/books
 */
app.use('/api/books', booksRouter);

/**
 * Root endpoint - API health check
 */
app.get('/', (req, res) => {
  res.json({ 
    message: 'Smart Library System API',
    status: 'Server is running',
    endpoints: {
      getAllBooks: 'GET /api/books',
      addBook: 'POST /api/books',
      deleteBook: 'DELETE /api/books/:id'
    }
  });
});

/**
 * 404 Error Handler - Handle undefined routes
 */
app.use((req, res) => {
  res.status(404).json({ 
    message: 'Route not found',
    requestedUrl: req.originalUrl
  });
});

/**
 * Global Error Handler
 */
app.use((err, req, res, next) => {
  console.error('Server Error:', err.stack);
  res.status(500).json({ 
    message: 'Internal server error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Set server port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
  console.log(`📚 Smart Library System API is ready`);
});
