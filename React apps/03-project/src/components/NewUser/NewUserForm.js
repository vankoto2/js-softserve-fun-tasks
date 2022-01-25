import React, { useState } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./NewUserForm.css";

const NewUserForm = (props) => {
  const [enteredName, setentEredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setentEredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        massage: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        massage: "Please enter a valid age (>0).",
      });
      return;
    }
    console.log(enteredName, enteredAge);

    props.onAddUser(enteredName, enteredAge);
    setentEredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} massage={error.massage} onConfirm={errorHandler}/>}
      <form onSubmit={formSubmitHandler}>
        <div className="user-form">
          <div className="user-form__control">
            <div className="user-form__controls">Username</div>
            <input
              type="text"
              value={enteredName}
              onChange={nameChangeHandler}
            ></input>
            <div className="user-form__controls">Age (Years)</div>
            <input
              type="number"
              value={enteredAge}
              onChange={ageChangeHandler}
            ></input>
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUserForm;
