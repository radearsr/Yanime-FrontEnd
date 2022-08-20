import React from "react";
import "./labelTitle.css";

const LabelTitle = ({text}) => {
  return (
    <h2 className="label-title managed-text">{text}</h2>
  );
};

export default LabelTitle;
