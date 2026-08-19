# Expense Tracker

A full-stack expense and income tracking application built with React, 
Express.js, MongoDB, and JWT authentication.

## Features

- User registration and login
- Password hashing with bcryptjs
- JWT authentication
- Add, edit, and delete expenses
- Add, edit, and delete income
- User-specific financial data
- Expense filtering
- Dashboard summaries
- Monthly expense calculations
- Responsive interface

## Tech Stack

### Frontend
- React
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CORS

## Project Structure

```text
expense-tracker/
├── frontend/
│   ├── src/
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── .env.example
└── README.md

## Running Locally

### Backend

```bash
cd backend
npm install
npm run dev