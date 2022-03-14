import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [expenseActiveStatus, setExpenseActiveStaus] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    if (enteredExpenseData) {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };

      console.log(expenseData);
      props.onAddExpense(expenseData);
    }
    toggleExpenseForm();
  };

  const returnExpenseForm = () => {
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
  };

  const addExpenseHandler = (event) => {
    toggleExpenseForm();
  };

  const toggleExpenseForm = () =>
    setExpenseActiveStaus((prevState) => !prevState);

  return (
    <div>
      {!expenseActiveStatus && (
        <div className="new-expense">
          <button onClick={addExpenseHandler}>Add New Expense</button>
        </div>
      )}
      {expenseActiveStatus && returnExpenseForm()}
    </div>
  );
};

export default NewExpense;
