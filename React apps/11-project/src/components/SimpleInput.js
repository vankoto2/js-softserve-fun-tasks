import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");

  const nameInputStateHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmisionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      return;
    }
    const enteredValue = nameInputRef.current.value;
    console.log(enteredName);

    console.log(enteredValue);

    // nameInputRef.current.value = "";
    setEnteredName("");
  };

  return (
    <form onSubmit={formSubmisionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputStateHandler}
          value={enteredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
