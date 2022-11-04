import React from "react";
import "./labelThumbnail.css";

const LabelThumbnail = ({srcImg, alter}) => {
  return (
  <div className="wrapper-thumb-img">
    <img src={srcImg} alt={alter} className="thumb-img" />
  </div>
  );
};

export default LabelThumbnail;
