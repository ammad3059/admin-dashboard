import React from "react";
import "./button.css";

const Button = ({ title }) => {
  return <button className={`btn ${title}`}>{title}</button>;
};

export default Button;
