import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/SearchResult.css";
import {
  LabelThumbnail,
  LabelTitle,
  LabelText,
  LabelBadge,
} from "../../components/Atoms";


const SearchResult = ({linkVideo, srcThumb, title, genre, type}) => {
  const navigate = useNavigate();

  return (
    <div className="wrapper-search-result d-flex shadow-sm" onClick={() => navigate(`/streaming/${linkVideo}`)}>
      <LabelThumbnail srcImg={srcThumb} alter={title} />
      <div className="about-result">
        <LabelTitle text={title} />
        <LabelText text={genre} />
        <LabelBadge text={type} />
      </div>
    </div>
  );
};

export default SearchResult;
