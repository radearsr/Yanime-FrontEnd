import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./episodeItem.css";

const EpisodeItem = ({number, linkVideo, activePage}) => {
  const navigate = useNavigate();
  const curActivePage = parseFloat(activePage) === parseFloat(number) ? "active" : "";

  return (
    <div className={`episode-item ${curActivePage}`} onClick={() => navigate(`/streaming/${linkVideo}`)}>
      <span className="number">{number}</span>
      <div className="group-label">
        <p className="label">Episode</p>
        <span className="label-number">{number}</span>
      </div>
    </div>
  );
};

export default EpisodeItem;
