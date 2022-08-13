import React from "react";
import "./searchResult.css";
import {
  AnimeThumbnail,
  AnimeTitle,
  AnimeGenre,
  AnimeType,
} from "../../";

const SearchResult = ({srcThumb, title, genre, type}) => {
  return (
    <div className="wrapper-result-item">
      <AnimeThumbnail srcImg={srcThumb} alter={title} />
      <div className="about-item">
        <AnimeTitle text={title} />
        <AnimeGenre text={genre} />
        <AnimeType text={type} />
      </div>
    </div>
  );
};

export default SearchResult;