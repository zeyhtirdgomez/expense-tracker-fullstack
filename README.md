💰 Expense Tracker

A full-stack expense and income management application built with React, Express.js, MongoDB, and JWT authentication.

Track your income and expenses, monitor your remaining balance, filter transactions, and view your monthly spending — all through a responsive interface.


---

✨ Features

🔐 Authentication

User registration

User login

JWT authentication

Password hashing with bcryptjs

User-specific financial data


💸 Expense Management

Add expenses

Edit expenses

Delete expenses

Filter expenses by category

Monthly expense calculations


💰 Income Management

Add income

Edit income

Delete income

Track total income


📊 Dashboard

Total income

Total expenses

Remaining balance

Monthly expenses

Real-time updates after adding, editing, or deleting transactions


📱 Responsive UI

Desktop-friendly interface

Mobile-friendly layout

Responsive forms and transaction cards

No major horizontal overflow



---

🛠️ Tech Stack

Frontend

Technology	Purpose

React	User interface
Axios	API requests
CSS	Styling


Backend

Technology	Purpose

Node.js	Runtime
Express.js	REST API
MongoDB	Database
Mongoose	MongoDB ODM
JWT	Authentication
bcryptjs	Password hashing
CORS	Cross-origin requests



---

🏗️ Project Structure

expense-tracker/
│
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


---

🚀 Getting Started

1. Clone the repository

git clone <your-repository-url>
cd expense-tracker


---

2. Backend Setup

cd backend
npm install

Create your environment file:

cp .env.example .env

Then configure your .env:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

Start the backend:

npm run dev

The backend will run on:

http://localhost:5000


---

3. Frontend Setup

Open another terminal:

cd frontend
npm install
npm run dev

The frontend will be available at the URL shown by Vite, typically:

http://localhost:5173


---

🔄 Application Flow

┌──────────────┐
                 │    Register  │
                 └──────┬───────┘
                        ↓
                 ┌──────────────┐
                 │     Login    │
                 └──────┬───────┘
                        ↓
                🔐 JWT Authentication
                        ↓
                 ┌──────────────┐
                 │   Dashboard  │
                 └──────┬───────┘
                        │
          ┌─────────────┼─────────────┐
          ↓             ↓             ↓
       Income        Expenses      Statistics
          │             │             │
          ↓             ↓             ↓
        CRUD           CRUD       Calculations
          │             │             │
          └─────────────┼─────────────┘
                        ↓
                    MongoDB


---

🔒 Environment Variables

For security, sensitive environment variables are not committed to GitHub.

The repository includes:

.env.example

as a template for required environment variables.

Never commit your actual .env file.


---

📊 Dashboard

The dashboard provides an overview of your financial activity:

┌──────────────────┐
│   Total Income   │
│    ₱7,000.00     │
└──────────────────┘

┌──────────────────┐
│  Total Expenses  │
│    ₱1,000.00     │
└──────────────────┘

┌──────────────────┐
│ Remaining Balance│
│    ₱6,000.00     │
└──────────────────┘

┌──────────────────┐
│ Monthly Expenses │
│      ₱700.00     │
└──────────────────┘


---

🎯 What I Learned

This project was built to practice full-stack development and includes experience with:

Building a REST API with Express.js

Connecting React to a backend API

MongoDB data modeling with Mongoose

JWT-based authentication

Password hashing

CRUD operations

Protected API routes

User data isolation

React state management

Form handling and validation

Filtering data

Monthly calculations

Responsive UI development

Git and GitHub workflow



---

📌 Project Status

MVP Complete ✅

The core expense and income tracking functionality is implemented and working.


---

🔮 Possible Future Improvements

Pagination

Data visualization and charts

Dark mode

Export reports

Budget limits

Recurring transactions

Notifications

Advanced filtering

Deployment



---

👨‍💻 Author

Zeyhtird Gomez

Built as a full-stack development project to strengthen practical experience with React, Node.js, Express.js, MongoDB, and JWT authentication.
