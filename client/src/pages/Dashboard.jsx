import Header from '../components/Header';
import ExpenseList from '../components/ExpenseList';
import './css/Dashboard.css';

function Dashboard() {
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
                    <span>PHP400.00</span>
                </section>
                
                <section className='budget-remaining'>
                    <h3>Budget Remaining:</h3>
                    <span>PHP9,600.00</span>
                </section>
                
                <section className='this-month'>
                    <h3>This Month:</h3>
                    <span>PHP400.00</span>
                </section>   
            </div>

            <ExpenseList />

            <button className='add-expense'>Add</button>
        </>
    )
}

export default Dashboard;