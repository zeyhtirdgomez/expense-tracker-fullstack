import ExpenseCard  from "./ExpenseCard";
import './css/ExpenseList.css';

function ExpenseList(props) {

    const expenses = props.expenses;
    const  onExpenseDeleted = props.onExpenseDeleted;
    const onEditExpense = props.onEditExpense;
    
    return(
        <div className="expense-list">
            {expenses.map(expense => <ExpenseCard
                                        key = {expense._id} 
                                        _id = {expense._id}
                                        category={expense.category}
                                        description={expense.description} 
                                        amount={expense.amount}
                                        date={expense.date}
                                        onExpenseDeleted={onExpenseDeleted}
                                        onEditExpense={onEditExpense}
                                    /> 
            )}
        </div>
    )
}

export default ExpenseList;