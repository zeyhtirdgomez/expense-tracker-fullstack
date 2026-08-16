import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import './css/Dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


function Dashboard() {

    const [expenses, setExpenses] = useState([]);
    const [editingExpense, setEditingExpense] = useState(null);
    const [addExpense, setAddExpense] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/expenses');
                setExpenses(response.data);
            } catch (err) {
                setError('Failed to load expense');
                console.log("ERROR: ", err);
                console.log('MESSAGE: ', err.message);
                console.log("CODE: ", err.code);
                console.log("RESPONSE: ", err.response);
                console.log("REQUEST: ", err.request);
            } finally {
                setLoading(false);
            }
        };

        fetchExpenses();
    }, []); 
    
    const handleExpenseAdded = (newExpense) => {
        setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    };

    const handleExpenseDeleted = (deletedId) => {
        setExpenses(prevExpenses => prevExpenses.filter(expense => expense._id !== deletedId));
    };

    const handleEditExpense = (expense) => {
        setEditingExpense(expense)
        console.log(editingExpense);
    };

    const handleExpenseUpdated = (updatedExpense) => {
        setExpenses(prevExpenses => prevExpenses.map(expense => expense._id === updatedExpense._id ? updatedExpense : expense));
    };

    return (        
        <>
            <Header />

            <h2 className='dashboard'>Dashboard</h2>

            <div className="summary">
                <section className='total-expenses'>
                    <h3>Total Expenses:</h3>
                    <span>PHP400.00</span>
                </section>
                
                <section className='this-month'>
                    <h3>This Month:</h3>
                    <span>PHP700.00</span>
                </section>
                
                <section className='budget-remaining'>
                    <h3>Budget Remaining:</h3>
                    <span>PHP9,600.00</span>
                </section>
            </div>
            
            { 
                loading ? (<span>Loading...</span>) : 
                error ?   (<span>{error}</span>) :
                expenses.length === 0 ? (<span>No expenses yet.</span>) :
                (<ExpenseList expenses={expenses} onExpenseDeleted={handleExpenseDeleted} onEditExpense={handleEditExpense}/>)
            }

            <button className='add-expense' onClick={() => {
                setAddExpense(true);
            }}>Add</button>

            {editingExpense &&
                <ExpenseForm expense={editingExpense} onExpenseUpdated={handleExpenseUpdated}/>
            }

            {addExpense &&
                <ExpenseForm onExpenseAdded={handleExpenseAdded}/>
            }
        </>
    )
}

export default Dashboard;