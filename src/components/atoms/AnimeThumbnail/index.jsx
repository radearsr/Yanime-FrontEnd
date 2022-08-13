import React from "react";
import "./animeThumbnail.css";

const AnimeThumbnail = ({srcImg, alter}) => {
  return (<img src={srcImg} alt={alter} className="thumb-img" />);
};

export default AnimeThumbnail;
