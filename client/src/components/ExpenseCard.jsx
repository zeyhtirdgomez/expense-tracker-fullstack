import './css/ExpenseCard.css';
import axios from 'axios';

function ExpenseCard({ id, category, description, amount, date }) {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/api/expenses/${id}`);
            console.log("Deleted successfully: ", response.data);

        } catch (error) {
            console.log('Failed to delete: ', error);
        } 
    }

    return(
        <div className='expense-card'>
            <h3>{category}</h3>
            <button onClick={() => handleDelete(id)}>X</button>
            {amount % 1 === 0 ? <span>PHP {amount}.00</span> : <span>PHP {amount}</span>}
            <p>{description}</p>
            <p>{formattedDate}</p>
        </div>
    )
}

export default ExpenseCard;