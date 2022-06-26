import React, { Fragment, useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Streaming.css";
import { BASE_URL, getDetailAnime } from "../../api/Functions";

const Streaming = () => {
  const { videoTitle } = useParams();
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getDetailAnime(setAnimes, videoTitle);
  }, []);


  return (
    animes.map((anime) => (
      <Fragment>
        <Row>
          <Col lg={12} className="header-video-player">
            <h1 className="video-title">
              <a href="/" className="logo-brand">
                YaPro
              </a>
              <span>| {`${anime.title}`}</span>
            </h1>
          </Col>
        </Row>

        <Row className="justify-content-evenly">
          <Col xs={12} lg={8} className="g-lg-0">
            <div className="video-wrapper">
              <ReactPlayer
                width={"100%"}
                height={"100%"}
                url={`${BASE_URL}/video/${videoTitle}`}
                controls={true}
              />
            </div>
            <div className="button-area">
              <a href="/" className="btn">
                Back
              </a>
              <a href="/" className="btn">
                Home
              </a>
              <a href="/" className="btn">
                Next
              </a>
            </div>
            <div className="video-details">
              <h4>Deskripsi</h4>
              <p>{anime.description}</p>
            </div>
          </Col>

          <Col xs={12} md={7} lg={3} className="g-lg-0">
            <div className="video-list">
              <div className="header-video-list">
                <h4 className="video-list-title">Daftar Episode</h4>
              </div>
              <div className="main-video-list">
                {anime.episodes.map((eps) => (
                  <a href={`${anime.title.split(" ").join("-").toLowerCase()}-eps-${eps.episode}`} className="video-item row g-0 mb-2">
                    <Col xs={2}>
                      <p className="eps">{eps.episode}</p>
                    </Col>
                    <Col xs={10}>
                      <p>Episode {eps.episode}</p>
                    </Col>
                  </a>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Fragment>
    ))
  );
};

export default Streaming;
