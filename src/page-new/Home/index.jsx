import React, { useState, useEffect } from 'react';
import "./home.css";
import { Container } from "react-bootstrap";
import { getAllAnimeByCategory } from "../../api/Functions";

const Home = () => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getAllAnimeByCategory(setAnimes, "movie");
  }, []);

  return (
    <div className="list-wrapper">  
      <header>
        <h1 className="section-title">Movie</h1>
        <a href={"/"} className="link-more">
          Lebih banyak
        </a>
      </header>
      <main>
        <Container>
          <div className="wrapper-anime-list">
            {animes.map((anime, index) => (
              <a href={`/streaming/${anime.title.split(" ").join("-").toLowerCase()}${anime.type === "series" ? "-eps-1" : ""}`}
                className="content-item"
              >
                <img
                  src={anime.poster}
                  alt={anime.title}
                  className="img-fluid"
                />
                <p>{anime.title}</p>
              </a>
            ))}
          </div>
        </Container>
      </main>
    </div>
  );
};

export default Home;