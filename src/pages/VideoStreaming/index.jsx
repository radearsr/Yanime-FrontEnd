import React from "react";
import ReactPlayer from "react-player";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import {
  AboutAnime,
  EpisodeItem,
} from "../../components";
import "./videoStreaming.css";


const VideoStreaming = () => {
  return (
    <Container fluid="lg">
      <Row className="g-0 justify-content-evenly wrapper-streaming-video">
        <Col xs={12} lg={8} className="g-0">
          <div className="video-wrapper">
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              url={"https://first-server-uqgwz.run-us-west2.goorm.io/api/video/kimi-no-nawa"}  
              controls={true} 
            />
          </div>
        </Col>
        <Col xs={12} lg={3}>
          <h3 className="title">Daftar Episode</h3>
          <div className="episode-list">
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
            <EpisodeItem />
          </div>
        </Col>
      </Row>
      <AboutAnime
        text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quia repudiandae libero, accusamus in repellendus quo temporibus autem enim, quos corrupti explicabo aperiam! Tempora eligendi a reiciendis, quidem ducimus similique assumenda culpa dolore illo voluptates et corporis inventore voluptate? Dolorem.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quia repudiandae libero, accusamus in repellendus quo temporibus autem enim, quos corrupti explicabo aperiam! Tempora eligendi a reiciendis, quidem ducimus similique assumenda culpa dolore illo voluptates et corporis inventore voluptate? Dolorem."
      />
    </Container>
  );
};

export default VideoStreaming;