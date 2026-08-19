# 💰 Expense Tracker


A full-stack **expense and income tracking application** built with **React, Express.js, MongoDB, and JWT authentication**.


Expense Tracker allows users to securely manage their personal income and expenses, monitor their remaining balance, filter transactions by category, and track their monthly spending.


This project was built to practice **full-stack web development**, including frontend development, REST API design, authentication, database management, CRUD operations, authorization, and responsive UI development.


---


## ✨ Features


### 🔐 Authentication


- User registration
- User login
- JWT-based authentication
- Password hashing with `bcryptjs`
- Protected API routes
- Logout functionality
- Authentication token stored on the client
- User-specific financial data
- Invalid credentials handling


### 💸 Expense Management


- Add expenses
- Edit expenses
- Delete expenses
- View expenses
- Filter expenses by category
- Expense validation
- Monthly expense calculations
- User-specific expenses


### 💰 Income Management


- Add income
- Edit income
- Delete income
- View income
- Income validation
- User-specific income


### 📊 Dashboard


The dashboard provides an overview of the user's finances:


- Total income
- Total expenses
- Remaining balance
- Monthly expenses
- Expense filtering
- Real-time UI updates after adding, editing, or deleting transactions


### 📱 Responsive Interface


The application was designed to work across different screen sizes:


- Desktop
- Tablet
- Mobile
- Responsive forms
- Responsive expense cards
- Responsive summary cards
- Mobile-friendly buttons
- No major horizontal overflow


### ⚠️ Application States


The application handles:


- Loading states
- Empty states
- Error states
- Form validation
- API errors
- Invalid authentication
- Empty expense categories


---


## 🛠️ Tech Stack


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


## 🏗️ Project Structure


```text
expense-tracker/
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


## 🚀 Getting Started


### Prerequisites


Make sure you have the following installed:


- [Node.js](https://nodejs.org/)
- MongoDB or a MongoDB Atlas database
- Git


---


## 📥 Installation


### 1. Clone the Repository


```bash
git clone https://github.com/zeyhtirdgomez/expense-tracker-fullstack.git
cd expense-tracker-fullstack
```


### 2. Install Frontend Dependencies


```bash
cd client
npm install
```


### 3. Install Backend Dependencies


Open another terminal and run:


```bash
cd server
npm install
```


---


## 🔐 Environment Variables


The backend requires environment variables for configuration.


Inside the `server` directory, create a `.env` file:


```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```


### Example Environment File


The repository includes a `.env.example` file:


```env
PORT=
MONGO_URI=
JWT_SECRET=
```


> ⚠️ **Never commit your actual `.env` file to GitHub.**


The `.env.example` file is only a template showing which environment variables are required.


---


## ▶️ Running the Application


The application requires both the backend and frontend servers to be running.


### Start the Backend


From the `server` directory:


```bash
npm run dev
```


The backend will run on:


```text
http://localhost:5000
```


### Start the Frontend


Open another terminal and run:


```bash
cd client
npm run dev
```


Vite will provide a local development URL, usually:


```text
http://localhost:5173
```


Open the provided URL in your browser.


---


## 🔑 Authentication Flow


Expense Tracker uses JWT-based authentication.


```text
Register
   ↓
User Account Created
   ↓
Login
   ↓
JWT Token Generated
   ↓
Token Stored on Client
   ↓
Protected API Requests
   ↓
Server Verifies Token
   ↓
User Data Returned
```


Financial records are associated with the authenticated user.


This prevents users from accessing another user's expenses or income.


---


## 💸 Expense Flow


```text
Add Expense
     ↓
React Expense Form
     ↓
Axios POST Request
     ↓
Express API
     ↓
JWT Authentication
     ↓
Expense Validation
     ↓
MongoDB
     ↓
Expense Created
     ↓
React UI Updates
```


Expenses can also be:


- Viewed
- Edited
- Deleted
- Filtered by category


---


## 💰 Income Flow


```text
Add Income
     ↓
React Income Form
     ↓
Axios POST Request
     ↓
Express API
     ↓
JWT Authentication
     ↓
Income Validation
     ↓
MongoDB
     ↓
Income Created
     ↓
React UI Updates
```


Income records can also be:


- Viewed
- Edited
- Deleted


---


## 📊 Dashboard


The dashboard provides a summary of the user's financial activity.


### Dashboard Information


```text
┌─────────────────────────┐
│      Total Income       │
│       ₱7,000.00         │
└─────────────────────────┘


┌─────────────────────────┐
│     Total Expenses      │
│       ₱1,000.00         │
└─────────────────────────┘


┌─────────────────────────┐
│    Remaining Balance    │
│       ₱6,000.00         │
└─────────────────────────┘


┌─────────────────────────┐
│    Monthly Expenses     │
│         ₱700.00         │
└─────────────────────────┘
```


### Balance Calculation


```text
Remaining Balance = Total Income - Total Expenses
```


Monthly expenses are calculated based on the expense date and the current month and year.


---


## 🔎 Expense Filtering


Users can filter expenses by category.


Available categories include:


- Tithes
- Food
- Transport
- School
- Bills
- Shopping
- Savings
- Others


The dashboard updates the displayed expense list based on the selected category.


---


## 🔒 Security


The project implements several basic security practices:


- Passwords are hashed using `bcryptjs`
- Protected API endpoints require JWT authentication
- User-specific queries prevent cross-user data access
- JWT secrets are stored in environment variables
- MongoDB credentials are stored in environment variables
- `.env` files are excluded from Git
- Authentication middleware protects private routes
- Users cannot modify another user's financial records


---


## 🧪 Testing


The application was manually tested for:


- User registration
- User login
- User logout
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
- Loading states
- Empty states
- Responsive layouts


Backend API endpoints were tested during development using **Postman**.


---


## 📚 What I Learned


This project helped me practice:


- React component development
- React state management
- React Router
- Form handling
- Form validation
- Axios API integration
- REST API development
- Express.js
- MongoDB
- Mongoose
- JWT authentication
- Password hashing
- Protected API routes
- Authorization
- CRUD operations
- User data isolation
- Filtering data
- Monthly calculations
- Responsive UI development
- Error handling
- Git and GitHub workflow


---


## 📌 Project Status


### MVP Complete ✅


The core expense and income tracking functionality is implemented and working.


The current version includes:


- Authentication
- Expense CRUD
- Income CRUD
- Dashboard
- Category filtering
- Monthly expense calculations
- User-specific data
- Responsive interface
- Logout functionality


---


## 🔮 Future Improvements


Possible future improvements include:


- [ ] Expense pagination
- [ ] Income pagination
- [ ] Charts and data visualization
- [ ] Budget limits
- [ ] Recurring transactions
- [ ] Export financial reports
- [ ] Advanced filtering
- [ ] Dark mode
- [ ] Notifications
- [ ] Deployment
- [ ] Production database configuration


---


## 🎯 Project Purpose


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


## 👨‍💻 Author


**Zeyhtird Gomez**


Built as a full-stack development project to practice and strengthen practical experience with **React, Node.js, Express.js, MongoDB, and JWT authentication**.


---


## 📄 License


This project is for educational and portfolio purposes.
