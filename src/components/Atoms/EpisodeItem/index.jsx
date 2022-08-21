import React from "react";
import "./episodeItem.css";

const EpisodeItem = () => {
  return (
    <div className="episode-item">
      <span className="number">1</span>
      <div className="group-label">
        <p className="label">Episode</p>
        <span className="label-number">1</span>
      </div>
    </div>
  );
};

export default EpisodeItem;
