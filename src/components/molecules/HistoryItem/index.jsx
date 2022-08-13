import React from "react";
import "./historyItem.css";
import {
  AnimeThumbnail,
  AnimeTitle,
  AnimeType,
} from "../../";

const HistoryItem = ({thumbImg, title, type}) => {
  return (
    <div className="wrapper-history-item">
      <AnimeThumbnail srcImg={thumbImg} alter={title} />
      <div className="about-history">
        <AnimeTitle text={title} />
        <AnimeType text={type} />
        <p className="duration">12:00 / 24:00</p>
      </div>
    </div>
  );
};

export default HistoryItem;
