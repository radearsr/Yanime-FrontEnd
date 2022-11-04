import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import SearchResult from "./SearchResult";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ResultList.css";

const ResultList = ({ animes }) => {
  const generateLink = (titleAnime, typeAnime) => {
    return `${titleAnime.split(" ").join("-").toLowerCase()}${typeAnime === "series" ? "-eps-1" : ""}`;
  };

  return (
    <Container className="content-list" fluid="fluid">
      <Row className="justify-content-center mb-2 mb-md-3 mb-lg-4">
      {animes.map((anime, index) => (
        <Col xs={12} md={6} xl={4} className="mb-3">
          <SearchResult
            linkVideo={generateLink(anime.title, anime.type)}
            srcThumb={anime.poster}
            title={anime.title}
            genre={anime.genre}
            type={anime.type === "series" ? `${anime.episode} Episode` : "Movie"}
          />
        </Col>
      ))}
      </Row>
    </Container>
  );
};

export default ResultList;
