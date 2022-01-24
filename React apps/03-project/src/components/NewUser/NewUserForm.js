import React, { useState } from "react";
import Button from "../UI/Button";

import "./NewUserForm.css";

const NewUserForm = (props) => {
  const [enteredName, setentEredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [userInfo, setUserInfo] = useState("");

  const nameChangeHandler = (event) => {
    setentEredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const formSubmitHandler = (event) => {
      if (enteredName === '') {
          alert('test')
      }
    event.preventDefault();
    setUserInfo({
      id: Math.random().toString(),
      enteredName,
      enteredAge,
    });
    setentEredName("");
    setEnteredAge("");
  };

  return (
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
          <Button userInput={userInfo} />
        </div>
      </div>
    </form>
  );
};

export default NewUserForm;
