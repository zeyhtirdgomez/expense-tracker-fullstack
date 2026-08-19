<<<<<<< HEAD
# 💰 Expense Tracker


A full-stack **expense and income tracking application** built with **React, Express.js, MongoDB, and JWT authentication**.


Expense Tracker allows users to securely manage their personal income and expenses, monitor their remaining balance, filter transactions by category, and track their monthly spending.


This project was built to practice **full-stack web development**, including frontend development, REST API design, authentication, database management, CRUD operations, authorization, and responsive UI development.


---

=======
💰 Expense Tracker

A full-stack expense and income management application built with React, Express.js, MongoDB, and JWT authentication.
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3

Track your income and expenses, monitor your remaining balance, filter transactions, and view your monthly spending — all through a responsive interface.

<<<<<<< HEAD

### Authentication


- User registration
- User login
- JWT-based authentication
- Password hashing with `bcryptjs`
- Protected API routes
- Logout functionality
- Authentication token stored on the client
- User-specific financial data
- Invalid credentials handling


### Expense Management


- Add expenses
- Edit expenses
- Delete expenses
- View expenses
- Filter expenses by category
- Expense validation
- Monthly expense calculations
- User-specific expenses


### Income Management


- Add income
- Edit income
- Delete income
- View income
- Income validation
- User-specific income


### Dashboard


The dashboard provides an overview of the user's finances:


- Total income
- Total expenses
- Remaining balance
- Monthly expenses
- Expense filtering
- Real-time UI updates after adding, editing, or deleting transactions


### Responsive Interface


The application was designed to work across different screen sizes:


- Desktop
- Tablet
- Mobile
- Responsive forms
- Responsive expense cards
- Responsive summary cards
- Mobile-friendly buttons
- No major horizontal overflow


### Application States


The application handles:


- Loading states
- Empty states
- Error states
- Form validation
- API errors
- Invalid authentication
- Empty expense categories


---

=======
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3

---

<<<<<<< HEAD

### Frontend


- **React** — User interface
- **React Router** — Client-side routing
- **Axios** — HTTP requests
- **CSS** — Styling


### Backend


- **Node.js** — JavaScript runtime
- **Express.js** — REST API framework
- **MongoDB** — Database
- **Mongoose** — MongoDB object modeling
- **JWT** — Authentication
- **bcryptjs** — Password hashing
- **CORS** — Cross-origin resource sharing


### Development Tools


- **Vite** — Frontend development server
- **Git** — Version control
- **GitHub** — Repository hosting
- **Postman** — API testing


---

=======
✨ Features

🔐 Authentication
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3

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

<<<<<<< HEAD

```text
expense-tracker/
=======
expense-tracker/
│
├── frontend/
│   ├── src/
│   └── package.json
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── css/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── ...
│
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── ...
│   │
│   ├── server.js
│   ├── package.json
│   └── ...
│
├── .gitignore
├── .env.example
└── README.md
```


---

<<<<<<< HEAD

## Getting Started


### Prerequisites


Make sure you have the following installed:


- [Node.js](https://nodejs.org/)
- MongoDB or a MongoDB Atlas database
- Git
=======
🚀 Getting Started

1. Clone the repository

git clone <your-repository-url>
cd expense-tracker
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3


---

<<<<<<< HEAD

## Installation


Clone the repository:


```bash
git clone <your-repository-url>
cd expense-tracker
```


### Install Frontend Dependencies


```bash
cd client
npm install
```


### Install Backend Dependencies


Open another terminal:


```bash
cd server
npm install
```


---


## Environment Variables


The backend requires environment variables for configuration.


Create a `.env` file inside the `server` directory:


```bash
cd server
```


Then create:


```text
.env
```


Add the following:


```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```


> **Never commit your `.env` file to GitHub.**


Use `.env.example` as a template for other developers:


```env
PORT=
MONGO_URI=
JWT_SECRET=
```
=======
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
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3


---

<<<<<<< HEAD

## ▶️ Running the Application


### Start the Backend


From the `server` directory:


```bash
npm run dev
```


The backend should run on:


```text
http://localhost:5000
```


### Start the Frontend


Open another terminal:


```bash
cd client
npm run dev
```


Vite will provide a local development URL, usually:


```text
http://localhost:5173
```


Open the URL in your browser.
=======
3. Frontend Setup

Open another terminal:

cd frontend
npm install
npm run dev

The frontend will be available at the URL shown by Vite, typically:

http://localhost:5173
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3


---

<<<<<<< HEAD

## Authentication Flow


The application uses JWT authentication.


```text
Register
   ↓
User Account Created
   ↓
Login
   ↓
JWT Token
   ↓
Token Stored on Client
   ↓
Protected API Requests
   ↓
Server Verifies Token
   ↓
User Data Returned
```


Financial records are associated with the authenticated user, preventing users from accessing another user's expenses or income.
=======
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
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3


---

<<<<<<< HEAD

## Expense & Income Flow


### Expense


```text
Add Expense
     ↓
React Form
     ↓
Axios POST Request
     ↓
Express API
     ↓
JWT Authentication
     ↓
MongoDB
     ↓
Expense Created
     ↓
React UI Updates
```


### Income


```text
Add Income
     ↓
React Form
     ↓
Axios POST Request
     ↓
Express API
     ↓
JWT Authentication
     ↓
MongoDB
     ↓
Income Created
     ↓
React UI Updates
```
=======
🔒 Environment Variables

For security, sensitive environment variables are not committed to GitHub.

The repository includes:

.env.example

as a template for required environment variables.

Never commit your actual .env file.
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3


---

<<<<<<< HEAD

## Dashboard Calculations


The dashboard calculates financial information from the user's transactions.


```text
Total Income
      ↓
Total Expenses
      ↓
Remaining Balance
```


The remaining balance is calculated as:


```text
Remaining Balance = Total Income - Total Expenses
```


Monthly expenses are calculated using the expense date and the current month and year.
=======
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
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3


---

<<<<<<< HEAD

## Testing


The application was manually tested for:


- Registration
- Login
- Logout
- Invalid credentials
- Protected routes
- Expense creation
- Expense editing
- Expense deletion
- Income creation
- Income editing
- Income deletion
- Category filtering
- Monthly expense calculations
- User data isolation
- Form validation
- API errors
- Responsive layouts


API endpoints were tested during development using **Postman**.
=======
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

>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3


---

<<<<<<< HEAD

## Security


The project implements several basic security practices:


- Passwords are hashed using `bcryptjs`
- Protected endpoints require JWT authentication
- User-specific queries prevent cross-user data access
- JWT secrets are stored in environment variables
- MongoDB credentials are stored in environment variables
- `.env` files are excluded from Git
=======
📌 Project Status

MVP Complete ✅

The core expense and income tracking functionality is implemented and working.
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3


---

<<<<<<< HEAD

## Project Status


### MVP Completed 


The current version includes the core functionality required for a personal expense and income tracker.


### Future Improvements


Possible future improvements include:


- Expense pagination
- Charts and data visualization
- Budget limits
- Recurring transactions
- Exporting financial reports
- Advanced filtering
- Dark mode
- Deployment


---


## Purpose


This project was created as a practical **full-stack development project** to strengthen my understanding of:


- React
- REST APIs
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- CRUD operations
- Authorization
- Client-side routing
- API integration
- Responsive UI development
- Git and GitHub


It serves as a foundation for building larger full-stack applications.


---


## Author


**Zeyhtird Gomez**


Built as a full-stack development project.


---


## License


This project is for educational and portfolio purposes.
=======
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
>>>>>>> 3afd5165d95e61c6e37f27a969287bd5b95018a3
