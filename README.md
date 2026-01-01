# Smart Library System

A web application built with the MERN stack for managing library book collections.


## Description

This is a Single Page Application that allows users to manage a library's book collection. Users can add new books with details like title, author, ISBN, and publication year. The application displays all books in a card layout and allows deletion of books from the collection.


## Features

- Add new books to the library
- View all books in card format
- Delete books from the collection
- Responsive design for mobile and desktop
- Real-time UI updates
- Form validation and error handling


## Technology Stack

Frontend:
- React.js
- CSS3
- Axios

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS


## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB installation


## Installation and Setup

Clone the repository:

```
git clone https://github.com/MaauzMansoor/FWD-Lab-Final-Smart-Library-System.git
cd FWD-Lab-Final-Smart-Library-System
```


Backend Setup:

```
cd server
npm install
npm start
```

The backend server runs on http://localhost:5000


Frontend Setup:

```
cd client
npm install
npm start
```

The frontend application runs on http://localhost:3000


## Project Structure

```
client/
  - React frontend application
  - Contains components for BookForm, BookList, and BookCard
  
server/
  - Node.js backend application
  - Contains models, routes, and database configuration
```


## API Endpoints

```
GET /api/books - Retrieve all books
POST /api/books - Add a new book
DELETE /api/books/:id - Delete a book by ID
```


## Environment Variables

Create a .env file in the server directory:

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```


## Author

Muhammad Maauz Mansoor
University of Multan Campus
Frontend Web Development Lab - Fall 2025


## Project Information

Course: Frontend Web Development Lab
Semester: Fall 2025
Submission Date: January 1, 2026


## License

This project is created for educational purposes.
