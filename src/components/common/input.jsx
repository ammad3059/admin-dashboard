import React from "react";
import "./input.css";

const Input = ({ label, name, plHolder, type }) => {
  return (
    <div className="inputBox">
      <label htmlFor={name} className="inputLabel">
        {label}
      </label>
      <input
        className="inputField"
        type={type}
        id={name}
        placeholder={plHolder}
      />
    </div>
  );
};

export default Input;
