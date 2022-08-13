import React, { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getAllAnimeByCategory } from "../../api/Functions";
import { AnimeItem, HeaderAnimeList } from "../../components";
import "./home.css";

const Home = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getAllAnimeByCategory(setAnimes, "movie");
  }, []);

  return (
    <Container>
      <HeaderAnimeList title="Movie" />
      <Row>          
        {animes.map((anime, index) => (
          <Col xs={4} lg={2} key={index}>
            <AnimeItem
              title={anime.title} 
              srcImg={anime.poster}
            /> 
          </Col>
        ))}
      </Row>
      <HeaderAnimeList title="Movie" />
      <Row>          
        {animes.map((anime, index) => (
          <Col xs={4} lg={2} key={index}>
            <AnimeItem
              title={anime.title} 
              srcImg={anime.poster}
            /> 
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;