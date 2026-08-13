import ExpenseCard  from "./ExpenseCard";
import './css/ExpenseList.css';

const expenses = [
    {
        id : 1,
        category : 'Food',
        description : 'Lunch',
        amount : 150
    },
    {
        id : 2,
        category : 'School',
        description : 'Supplies',
        amount : 200
    },
    {
        id : 3,
        category : 'Transportation',
        description : 'Jeepney',
        amount : 50
    }
];

function ExpenseList() {

    return(
        <div className="expense-list">
            {expenses.map(expense => <ExpenseCard
                                        key = {expense.id} 
                                        category={expense.category}
                                        description={expense.description} 
                                        amount={expense.amount}
                                    /> 
            )}
        </div>
    )
}

export default ExpenseList;