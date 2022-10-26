import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import SearchResult from "./SearchResult";
import { useSearchParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ResultList.css";
import { getAllAnimeBySearch } from "../../api/Functions";

const ResultList = () => {
  const [animes, setAnimes] = useState([]);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("q");

  const generateLink = (titleAnime, typeAnime) => {
    return `${titleAnime.split(" ").join("-").toLowerCase()}${typeAnime === "series" ? "-eps-1" : ""}`;
  };

  useEffect(() => {
    getAllAnimeBySearch(setAnimes, keyword, 1);
  }, [keyword]);

  return (
    <Container className="content-list" fluid="lg">
      {animes.map((anime, index) => (
        <Row className="justify-content-center mb-2 mb-md-3 mb-lg-4" key={index}>
          <Col xs={12} md={10} lg={8}>
            <SearchResult
              linkVideo={generateLink(anime.title, anime.type)}
              srcThumb={anime.poster}
              title={anime.title}
              genre={anime.genre}
              type={anime.type === "series" ? `${anime.episode} Episode` : "Movie"}
            />
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ResultList;
