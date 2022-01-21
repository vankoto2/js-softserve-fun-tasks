import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";
import "./ExpenseItemRender.css";
import ExpensesChart from "./ExpensesChart";

function ExpenseItemRender(props) {
  const [enteredYear, setEnteredYear] = useState("2021");
  const yearChangeFilterHandler = (filteredYear) => {
    setEnteredYear(filteredYear);
    props.onYearFilter(filteredYear);
  };

  const filteredExpenses = props.data.filter(
    (test) => test.date.getFullYear() === +enteredYear
  );



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredYear}
          onYearChangeFilter={yearChangeFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default ExpenseItemRender;
