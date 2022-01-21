import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [hideExpensesForm, setHideExpensesForm] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpensesHandler = (event) => {
    setHideExpensesForm(event.showAdding)
  };


const test = (
      <div className="new-expense">
        <button  onClick={addNewExpensesHandler}>Add New Expenses</button>
      </div>
    );
    const test2 = (
      <div className="new-expense">
        <ExpenseForm onCansel={addNewExpensesHandler} onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );

  return hideExpensesForm === true ? (test) : (test2)

};

export default NewExpense;
