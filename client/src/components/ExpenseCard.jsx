import './css/ExpenseCard.css';
import axios from 'axios';
import { MdOutlineDelete, MdOutlineEdit } from "react-icons/md";

function ExpenseCard({ _id, category, description, amount, date, onExpenseDeleted, onEditExpense }) {
    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('en-PH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    const handleDelete = async (_id) => {
        const confirmed = window.confirm('Are yousure youwant to delete this expense?')

        if (!confirmed)
            return;

        console.log("Deleting ID: ", _id);
        console.log(`http://localhost:5000/api/expenses${_id}`);

        try {
            await axios.delete(`http://localhost:5000/api/expenses/${_id}`);
            onExpenseDeleted(_id);
            

        } catch (err) {
            console.log('Failed to delete expense: ', err);
            console.log("ERROR: ", err);
            console.log('MESSAGE: ', err.message);
            console.log("CODE: ", err.code);
            console.log("RESPONSE: ", err.response);
            console.log("REQUEST: ", err.request);
        } 
    }

    return(
        <div className='expense-card'>
            <h3>{category}</h3>
            <MdOutlineEdit type='button' onClick={() => onEditExpense({
                _id,
                category,
                description,
                amount
            })}/>
            <MdOutlineDelete type='button' onClick={() => handleDelete(_id)}/>
            {amount % 1 === 0 ? <span>PHP {amount}.00</span> : <span>PHP {amount}</span>}
            <p>{description}</p>
            <p>{formattedDate}</p>
        </div>
    )
}

export default ExpenseCard;