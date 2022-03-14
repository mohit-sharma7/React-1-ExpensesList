import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Remember, the reactHooks are fuctions which start with the word use. All Hooks must only be called directly inside the component function but not outside the component function neither inside any function present in component function.

const ExpenseItem = (props) => {
  // The below HookState function always returns the array with first value which would be the current state value which we want to be changed and second is the function which will eventually help to change that value.
  const [title, setTitle] = useState(props.title);

  // Also remember that, the useState is a special kind as it gives the function setTitle which when executed in some way tells the React that the component function inside which setTitle function was registered should be called again.
  const changeTitleHandler = () => {
    setTitle("Updated!");
    console.log("changeTitleHandler() called!");
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{props.amount}</div>
          <button onClick={changeTitleHandler}>ChangeTitle</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
