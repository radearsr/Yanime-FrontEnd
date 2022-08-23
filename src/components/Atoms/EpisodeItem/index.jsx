import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./episodeItem.css";

const EpisodeItem = ({number, linkVideo, activePage}) => {
  const epsRef = useRef(null);
  const navigate = useNavigate();
  const curActivePage = parseFloat(activePage) === parseFloat(number) ? "active" : "";
  const curRef = parseFloat(activePage) === parseFloat(number) ? epsRef : null;

  useEffect(() => {
    if (epsRef.current != null) {
      epsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  });

  return (
    <div className={`episode-item ${curActivePage}`} onClick={() => navigate(`/streaming/${linkVideo}`)} ref={curRef}>
      <span className="number">{number}</span>
      <div className="group-label">
        <p className="label">Episode</p>
        <span className="label-number">{number}</span>
      </div>
    </div>
  );
};

export default EpisodeItem;
