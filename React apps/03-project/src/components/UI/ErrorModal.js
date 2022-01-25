import React from "react";

import Button from "./Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <div className="backdrop" onClick={props.onConfirm}>
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.massage}</p>
        </div>
        <footer className="action">
          <Button onClick={props.onConfirm}>Ok</Button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
