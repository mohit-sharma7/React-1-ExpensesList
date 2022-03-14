import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  console.log(expenses);

  // let filteredContent = <p>No expenses found :(</p>;

  // if (expenses.length > 0) {
  //   filteredContent = expenses.map((expense) => (
  //     <ExpenseItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }

  const selectedDateHandler = (selectedYear) => {
    console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultSelectedYear={filteredYear}
          onSelectYear={selectedDateHandler}
        />
        <ExpensesChart expenses={expenses}/>
        <ExpenseList expenses={expenses} />

        {/* Below is the way of using conditional content inside JSX by using either teranry operator or we can also use shortCircuiting. */}

        {/* Ternary operator */}

        {/* {expenses.length === 0 ? (
          <p>No expenses found :(</p>
        ) : (
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}

        {/* shortCircuiting way: */}

        {/* {expenses.length === 0 && <p>No expenses found :(</p>}
        {expenses.length > 0 &&
          expenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* {filteredContent} */}

        {/* <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        />
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        />
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        />
        <ExpenseItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        /> */}
      </Card>
    </div>
  );
};

export default Expenses;
