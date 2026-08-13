import './css/ExpenseCard.css';

function ExpenseCard(props) {
    const { category, description, amount } = props;
    return(
        <div className='expense-card'>

            <h3>{category}</h3>
            {amount % 1 === 0 ? <span>PHP {amount}.00</span> : <span>PHP {amount}</span>}
            <p>{description}</p>
        </div>
    )
}

export default ExpenseCard;