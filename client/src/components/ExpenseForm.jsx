import axios from 'axios';
import './css/ExpenseForm.css';
import { useState } from 'react';

function ExpenseForm ({onExpenseAdded}){

    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSubmitting(true);

        const expense = {
            amount : Number(amount),
            category,
            description
        };

        try {
            const response = await axios.post('http://localhost:5000/api/expenses/', expense);
            console.log(response.data);
            onExpenseAdded(response.data);
            setAmount('');
            setCategory('');
            setDescription('');

        } catch (error) {
            console.log("Failed to submit expense: ", error);
            setError("Failed to submit try again.");
        } finally {
            setSubmitting(false);
        }
    };

    return(
        <form className="expense-form" onSubmit={handleSubmit}>
            
            <h3>Expense Form</h3>
            {error && <span className='form-error'>{error}</span>}
            <label htmlFor='amount'>Amount</label>
            <div className='input-wrapper'>
                <span className='prefix'>PHP</span>
                <input 
                    type="number" 
                    step="0.01" 
                    min="0.01" 
                    className="form-input" 
                    id='amount' 
                    placeholder='500.00'
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)}
                    required
                />
            </div>
                
            <label htmlFor='category'>Category</label>
            <select 
                className="form-input" 
                name="category" 
                id="category"
                value={category}
                onChange = {(event) => setCategory(event.target.value)}
                required
            >
                <option value="" selected disabled hidden>-- Choose an option --</option>
            
                <option value={'Tithes'}>Tithes</option>
                <option value={'Food'}>Food</option>
                <option value={'Transport'}>Transport</option>
                <option value={'School'}>School</option>
                <option value={'Bills'}>Bills</option>
                <option value={'Shopping'}>Shopping</option>
                <option value={'Savings'}>Savings</option>
                <option value={'Others'}>Others</option>
            </select>

            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                className="form-input" 
                placeholder='For afternoon snack.' 
                id='description'
                value={description}
                onChange = {(event) => setDescription(event.target.value)}
                required
            />

            <input 
                type="submit" 
                value={submitting? 'Adding...' : 'Add Expense'} 
                id='submit-btn'
                disabled={submitting}
            />
        </form>
    )
}

export default ExpenseForm;