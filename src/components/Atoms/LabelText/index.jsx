import React from "react";
import "./labelText.css";

const LabelText = ({text}) => {
  return (
    <p className="label-text managed-text">{text}</p>
  );
};

export default LabelText;