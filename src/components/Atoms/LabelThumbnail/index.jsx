import React from "react";
import "./labelThumbnail.css";

const LabelThumbnail = ({srcImg, alter}) => {
  return (<img src={srcImg} alt={alter} className="thumb-img" />);
};

export default LabelThumbnail;
