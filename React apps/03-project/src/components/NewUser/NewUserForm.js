import React, { useState, useRef } from "react";

import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import "./NewUserForm.css";

const NewUserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const enteredUserName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <form onSubmit={formSubmitHandler}>
        <div className="user-form">
          <div className="user-form__control">
            <div className="user-form__controls">Username</div>
            <input
              type="text"
              ref={nameInputRef}
            ></input>
            <div className="user-form__controls">Age (Years)</div>
            <input
              type="number"
              ref={ageInputRef}
            ></input>
          </div>
          <div>
            <Button type="submit">Add User</Button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default NewUserForm;
