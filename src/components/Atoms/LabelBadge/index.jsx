import React from "react";
import "./labelBadge.css";

const LabelBadge = ({text}) => {
  return (
    <span className="label-badge">
      {text}
    </span>  
  );
};

export default LabelBadge;
