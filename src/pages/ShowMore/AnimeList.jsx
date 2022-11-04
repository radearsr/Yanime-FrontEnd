import React from "react";
import { AnimeItem } from "../../components/Atoms"

const AnimeList = ({ animes }) => {
  const generateLink = (titleAnime, typeAnime) => {
    return `${titleAnime.split(" ").join("-").toLowerCase()}${typeAnime === "series" ? "-eps-1" : ""}`;
  };

  return (
    animes.map((anime, index) => (
      <AnimeItem
      key={index}
      idAnime={anime.id}
      poster={anime.poster}
      title={anime.title}
      linkEps={generateLink(anime.title, anime.type)}
    />
    ))
  );
};

export default AnimeList;