import React, { Fragment } from "react";
// import videojs from "video.js";
// import VideoJS from "./VideoJS";
import ReactPlayer from "react-player";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Streaming.css";

const Streaming = () => {
  return (
    <Fragment>
      <Row>
        <Col lg={12} className="header-video-player">
          <h1 className="video-title">
            <a href="/" className="logo-brand">
              YaPro
            </a>
            <span>| Lorem ipsum dolor sit amet consectetur.</span>
          </h1>
        </Col>
      </Row>

      <Row className="justify-content-evenly">
        <Col xs={12} lg={8} className="g-lg-0">
          <div className="video-wrapper">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url={"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}
              playing={true}
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur distinctio illum consectetur itaque quibusdam quidem
              dicta, repellendus eos placeat doloribus officiis magni
              consequuntur eveniet voluptatum non, delectus ipsum modi et? Autem
              cumque placeat accusamus repellat dolorum suscipit officia
              voluptates tempore, eum nostrum impedit, delectus commodi ratione
              ad ipsum possimus ullam quaerat eaque eveniet? A, inventore. Qui,
              blanditiis. Obcaecati quod saepe animi totam fugit illo accusamus
              fuga nobis dicta consequatur necessitatibus quos, facere, esse
              nihil tenetur doloremque voluptatibus doloribus repellat veniam
              iste dolorum magni, dolorem quis? Nam animi, magnam voluptatum
              pariatur natus delectus corrupti ullam voluptatibus. Tenetur id
              non corporis! Sunt.
            </p>
          </div>
        </Col>

        <Col xs={12} md={7} lg={3} className="g-lg-0">
          <div className="video-list">
            <div className="header-video-list">
              <h4 className="video-list-title">Daftar Episode</h4>
            </div>
            <div className="main-video-list">
              <a href="/" className="video-item row g-0 mb-2">
                <Col xs={2}>
                  <p className="eps">1</p>
                </Col>
                <Col xs={10}>
                  <p>Episode 1</p>
                </Col>
              </a>
              <a href="/" className="video-item row g-0 mb-2">
                <Col xs={2}>
                  <p className="eps">1</p>
                </Col>
                <Col xs={10}>
                  <p>Episode 1</p>
                </Col>
              </a>
              <a href="/" className="video-item row g-0 mb-2">
                <Col xs={2}>
                  <p className="eps">1</p>
                </Col>
                <Col xs={10}>
                  <p>Episode 1</p>
                </Col>
              </a>
              <a href="/" className="video-item row g-0 mb-2">
                <Col xs={2}>
                  <p className="eps">1</p>
                </Col>
                <Col xs={10}>
                  <p>Episode 1</p>
                </Col>
              </a>
              <a href="/" className="video-item row g-0 mb-2">
                <Col xs={2}>
                  <p className="eps">1</p>
                </Col>
                <Col xs={10}>
                  <p>Episode 1</p>
                </Col>
              </a>
            </div>
          </div>
        </Col>
      </Row>

      <ReactPlayer
        width={"100%"}
        height={"100%"}
        src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
        controls={true}
        playing={true}
      />
    </Fragment>
  );
};

export default Streaming;
