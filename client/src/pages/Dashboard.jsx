import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';
import ExpenseForm from '../components/ExpenseForm';
import './css/Dashboard.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import IncomeForm from '../components/IncomeForm';


function Dashboard() {

    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);
    const [editingExpense, setEditingExpense] = useState(null);
    const [addExpense, setAddExpense] = useState(false);
    const [addIncome, setAddIncome] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null);
    const [categoryFilter, setCategoryFilter] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const expensesPerPage = 5;

    // Fetch Expenses
    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const token = localStorage.getItem('token');
                
                const response = await axios.get('http://localhost:5000/api/expenses', {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                });

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

    // Fetch Incomes
    useEffect(() => {
        const fetchIncomes = async () => {
            try {
                const token = localStorage.getItem('token');
                
                const response = await axios.get('http://localhost:5000/api/incomes', {
                    headers : {
                        Authorization : `Bearer ${token}`
                    }
                });

                setIncomes(response.data);
                console.log(incomes);
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

        fetchIncomes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    // Handle Expenses
    const handleExpenseAdded = (newExpense) => {
        setExpenses(prevExpenses => [...prevExpenses, newExpense]);
    };

    const handleExpenseDeleted = (deletedId) => {
        setExpenses(prevExpenses => prevExpenses.filter(expense => expense._id !== deletedId));
        setCurrentPage(prevPage => {
            const remainingExpenses = expenses.length - 1;
            const newTotalPages = Math.ceil(remainingExpenses / expensesPerPage);

            return Math.min(prevPage, Math.max(newTotalPages, 1));
        });
    };

    const handleEditExpense = (expense) => {
        setEditingExpense(expense);
        setAddExpense(false);
        setAddIncome(false);
    };

    const handleExpenseUpdated = (updatedExpense) => {
        setExpenses(prevExpenses => prevExpenses.map(expense => expense._id === updatedExpense._id ? updatedExpense : expense));
    };

    const filteredExpenses = categoryFilter === 'All' ? expenses : expenses.filter(expense => expense.category === categoryFilter);
    const totalPages = Math.ceil(filteredExpenses.length / expensesPerPage);
    const startIndex = (currentPage - 1) * expensesPerPage;
    const endIndex = startIndex + expensesPerPage;
    const paginatedExpenses = filteredExpenses.slice(startIndex, endIndex);

    // Handle Incomes
    const handleIncomeAdded = (newIncome) => {
        setIncomes(prevIncomes => [...prevIncomes, newIncome]);
    };

    // Compute Incomes and Expenses
    const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
    const remainingBalance = totalIncome - totalExpenses;
    
    const now = new Date();
    const thisMonthExpenses = expenses.reduce((total, expense) => {
        const expenseDate = new Date(expense.date);
        if(expenseDate.getMonth() === now.getMonth() && expenseDate.getFullYear() === now.getFullYear())
            return total + expense.amount;
        return total;
    }, 0);


    return (        
        <>
            <Header />

            <h2 className='dashboard'>Dashboard</h2>

            <div className="summary">

                <section className='total-income'>
                    <h3>Total Income:</h3>
                    <span>PHP {totalIncome.toFixed(2)}</span>
                </section>

                <section className='budget-remaining'>
                    <h3>Budget Remaining:</h3>
                    <span>PHP {remainingBalance.toFixed(2)}</span>    
                </section>

                <section className='total-expenses'>
                    <h3>Total Expenses:</h3>
                    <span>PHP {totalExpenses.toFixed(2)}</span>
                </section>
                
                <section className='monthly-expenses'>
                    <h3>Monthly Expense:</h3>
                    <span>PHP {thisMonthExpenses.toFixed(2)}</span>
                </section>
                
            </div>

            <label htmlFor='category-filter'>Filter by category: </label>
            <select id='category-filter' value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                <option value={'All'}>All</option>
                <option value={'Tithes'}>Tithes</option>
                <option value={'Food'}>Food</option>
                <option value={'Transport'}>Transport</option>
                <option value={'School'}>School</option>
                <option value={'Bills'}>Bills</option>
                <option value={'Shopping'}>Shopping</option>
                <option value={'Savings'}>Savings</option>
                <option value={'Others'}>Others</option>
            </select>
            
            { 
                loading ? (<span>Loading...</span>) : 
                error ?   (<span>{error}</span>) :
                filteredExpenses.length === 0 ? (<span>No expenses yet.</span>) :
                (<ExpenseList expenses={paginatedExpenses} onExpenseDeleted={handleExpenseDeleted} onEditExpense={handleEditExpense}/>)
            }

            {totalPages > 1 && (<div className='pagination'>
                <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 1}>Previous</button>
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>)}

            <div className="dashboard-actions">

                <button
                    className="add-expense"
                    onClick={() => {setAddExpense(true); setAddIncome(false)}}
                >
                    Add Expense
                </button>

                <button
                    className="add-income"
                    onClick={() => {setAddIncome(true); setAddExpense(false)}}
                >
                    Add Income
                </button>

            </div>

            {editingExpense && (
                <ExpenseForm
                    expense={editingExpense}
                    onExpenseUpdated={handleExpenseUpdated}
                    onClose={() => setEditingExpense(null)}
                />
            )}

            {addExpense && (
                <ExpenseForm
                    onExpenseAdded={handleExpenseAdded}
                    onClose={() => setAddExpense(false)}
                />
            )}

            {addIncome && (
                <IncomeForm
                    onIncomeAdded={handleIncomeAdded}
                    onClose={() => setAddIncome(false)}
                />
            )}
        </>
    )
}

export default Dashboard;