import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SlideItem from "./SlideItem";
import {
  loadDataHistoriesFromStorage,
} from "../../services/storageServices";

const Hero = ({animes}) => {  
  const generateLink = (titleAnime, typeAnime, idAnime, epsAnime=1) => {
    const histories = loadDataHistoriesFromStorage();
    const filteredHistories = histories.filter((history) => history.identity === idAnime);
    if (filteredHistories.length > 0) {
      titleAnime = filteredHistories[0].title;
      typeAnime = filteredHistories[0].type;
      epsAnime = filteredHistories[0].currentEpisode;
    }
    return `${titleAnime.split(" ").join("-").toLowerCase()}${typeAnime === "series" ? `-eps-${epsAnime}` : ""}`;
  };

  return (
    <Carousel controls={false} indicators={false}>
      {animes.map((anime) => (
        <Carousel.Item>
          <SlideItem
            linkWatch={generateLink(anime.title, anime.type, anime.id)}
            posterUrl={anime.poster}
            description={anime.descriptions}
            title={anime.title}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Hero;
