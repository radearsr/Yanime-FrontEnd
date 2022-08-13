import React from 'react';
import "./animeItem.css";

const AnimeItem = ({srcImg, title}) => {
  return (
    <div className="anime-item">
      <img
        src={srcImg}
        alt={title}
        className="img-poster"
      />
      <p className="title-poster">
        {title}
      </p>
    </div>
  );
};

export default AnimeItem;