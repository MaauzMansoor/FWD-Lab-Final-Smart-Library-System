# Smart Library System

A modern web application built with the MERN stack that allows librarians to manage book collections efficiently. This Single Page Application (SPA) provides features to add, view, and remove books from the library database.

## 🚀 Features

- **Add Books**: Add new books with title, author, ISBN, and publication year
- **View Books**: Display all books in a responsive card layout
- **Delete Books**: Remove books from the collection
- **Responsive Design**: Works seamlessly on devices from 320px and above
- **Real-time Updates**: Dynamic UI updates without page reload
- **Error Handling**: User-friendly error messages and validation

## 🛠️ Tech Stack

**Frontend:**

- React.js
- CSS3 (Responsive Design)
- Axios for API calls

**Backend:**

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB installation)

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Maauz-Mansoor/FWD-LAB-FINAL-SMART-LIBRARY-SYSTEM.git
cd FWD-LAB-FINAL-SMART-LIBRARY-SYSTEM
```

### 2. Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create a .env file and add your MongoDB connection string
# Create .env file with:
# MONGODB_URI=your_mongodb_connection_string
# PORT=5000

# Start the server
npm start
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to client directory (from project root)
cd client

# Install dependencies
npm install

# Start the React application
npm start
```

The frontend application will run on `http://localhost:3000`

## 📁 Project Structure

```
FWD-LAB-FINAL-SMART-LIBRARY-SYSTEM/
│
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BookForm.js
│   │   │   ├── BookList.js
│   │   │   └── BookCard.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── models/
│   │   └── Book.js
│   ├── routes/
│   │   └── books.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

## 🔌 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| GET    | `/api/books`     | Get all books       |
| POST   | `/api/books`     | Add a new book      |
| DELETE | `/api/books/:id` | Delete a book by ID |

## 📸 Output Screenshots

![Home Page](screenshots/home.png)
![Add Book Form](screenshots/add-book.png)
![Book List](screenshots/book-list.png)

## 👤 Author

**Muhammad Maauz Mansoor**

- University of Multan Campus
- Frontend Web Development Lab - Fall 2025

## 📅 Project Timeline

- **Course**: Frontend Web Development Lab
- **Semester**: Fall 2025
- **Submission Date**: January 1, 2026

## 📝 License

This project is created for educational purposes as part of the Final Lab Examination.
