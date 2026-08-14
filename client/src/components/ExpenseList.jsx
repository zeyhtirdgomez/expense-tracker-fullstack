import ExpenseCard  from "./ExpenseCard";
import './css/ExpenseList.css';

function ExpenseList(props) {

    const expenses = props.expenses;
    
    return(
        <div className="expense-list">
            {expenses.map(expense => <ExpenseCard
                                        key = {expense._id} 
                                        id = {expense._id}
                                        category={expense.category}
                                        description={expense.description} 
                                        amount={expense.amount}
                                        date={expense.date}
                                    /> 
            )}
        </div>
    )
}

export default ExpenseList;