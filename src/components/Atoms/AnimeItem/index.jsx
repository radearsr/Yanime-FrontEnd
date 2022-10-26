import React from "react";
import "./AnimeItem.css";

const AnimeItem = (props) => {
  return (
    <a 
      href={`/streaming/${props.idAnime}/${props.linkEps}`}
      className="content-item"
    > 
      <div className="poster-content-item d-flex">
        <img
          src={props.poster}
          alt={props.title}
          className="img-fluid"
        />
      </div>
      <p className="anime-title">{props.title}</p>
    </a>
  );
};

export default AnimeItem;
