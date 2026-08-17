import axios from 'axios';
import './css/IncomeForm.css';
import { useState, useEffect } from 'react';

function IncomeForm ({onIncomeAdded, income, onClose}){
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);
        setSubmitting(true);

        const data = {
            amount : Number(amount),
            category,
            description
        };

        try {
            const response = await axios.post('http://localhost:5000/api/incomes/',
                data,
                {headers : {Authorization : `Bearer ${localStorage.getItem("token")}`}}
            );
            
            onIncomeAdded(response.data);
            
            setAmount('')
            setCategory('');
            setDescription('');

        } catch (error) {
            console.log("Failed to submit income: ", error);
            setError("Failed to submit try again.");
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (income){
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setAmount(income.amount);
            setCategory(income.category);
            setDescription(income.description);
        }
    }, [income]);

    return(
        <form className="income-form" onSubmit={handleSubmit}>
            <button type='button' onClick={onClose}>X</button>
            <h3>Income Form</h3>
            {error && <span className='form-error'>{error}</span>}
            <label htmlFor='amount'>Amount</label>
            <div className='input-wrapper'>
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
                <option value="" disabled hidden>-- Choose an option --</option>
            
                <option value={'Salary'}>Salary</option>
                <option value={'Allowance'}>Allowance</option>
                <option value={'Scholarship'}>Scholarship</option>
                <option value={'Others'}>Others</option>
            </select>

            <label htmlFor="description">Description</label>
            <input 
                type="text" 
                className="form-input" 
                placeholder='Freelance Gig.' 
                id='description'
                value={description}
                onChange = {(event) => setDescription(event.target.value)}
            />

            <input 
                type="submit" 
                value={submitting ? 'Adding...' : 'Add Income'} 
                id='submit-btn'
                disabled={submitting}
            />
        </form>
    )
}

export default IncomeForm;