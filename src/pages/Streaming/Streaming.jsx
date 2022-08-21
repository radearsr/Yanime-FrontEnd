import React, {  useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Streaming.css";
import { BASE_URL, getDetailAnime } from "../../api/Functions";
import {
  EpisodeItem,
  AboutAnime,
} from "../../components/Atoms"

const Streaming = () => {
  const { videoTitle } = useParams();
  const [animes, setAnimes] = useState([]);

  const activeEps = videoTitle.includes("eps") ? videoTitle.split("-")[videoTitle.split("-").length - 1] : "1";

  const generateLink = (type, title, episode="") => {
    return type === "movie" ? 
      title.split(" ").join("-").toLowerCase() :
      `${title.split(" ").join("-").toLowerCase()}-eps-${episode}`;
  }

  useEffect(() => {
    getDetailAnime(setAnimes, videoTitle);
  }, []);


  return (
    animes.map((anime, index) => (
      <Container className="streaming-container" key={index}>
        <Row className="g-0 justify-content-between">
          <Col xs={12} lg={9} className="g-0">
            <div className="video-wrapper">
              <ReactPlayer 
                width={"100%"}
                height={"100%"}
                url={`${BASE_URL}/api/video/${videoTitle}`}
                controls
              />
            </div>
          </Col>
          <Col xs={12} lg={3} className="eps-section">
            <h3 className="title-episode-list">Daftar Episode</h3>
            <div className="episode-list">
                {console.log(anime)}
                {console.log(activeEps)}
                {anime.episodes.map((eps, index) => (
                  <EpisodeItem
                    key={index}
                    number={eps.episode}
                    linkVideo={generateLink(anime.type, anime.title, eps.episode)}
                    activePage={activeEps}
                  />
                ))}
            </div>
          </Col>
        </Row>
        <AboutAnime text={anime.description} />
      </Container>
    ))
  );
};

export default Streaming;
