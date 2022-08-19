import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import ResultItem from "./ResultItem";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ResultList.css";
import { getAllAnime, getAllAnimeBySearch } from "../../api/Functions";

const ResultList = () => {
  const [animes, setAnimes] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const generateLink = (titleAnime, typeAnime) => {
    return `${titleAnime.split(" ").join("-").toLowerCase()}${typeAnime === "series" ? "-eps-1" : ""}`;
  };

  useEffect(() => {
    if (query !== null) {
      getAllAnimeBySearch(setAnimes, query);
    } else {
      getAllAnime(setAnimes);
    }
  }, []);

  return (
    <Container className="content-list" fluid="lg">
      {animes.map((anime, index) => (
        <ResultItem
          key={index}
          linkVideo={generateLink(anime.title, anime.type)}
          srcImg={anime.poster}
          title={anime.title}
          description={anime.genre}
          episodeCount={anime.type === "series" ? anime.episodes.length + " Episode" : "Movie"}
        />
      ))}
    </Container>
  );
};

export default ResultList;
