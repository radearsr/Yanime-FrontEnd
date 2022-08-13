import "./headerAnimeList.css";
import React from 'react';

const HeaderAnimeList = (props) => {
  return (
    <div className="header-list">
      <h1 className="title">{props.title}</h1>
      <p className="link-more">Lebih Banyak</p>
    </div>
  );
};

export default HeaderAnimeList;