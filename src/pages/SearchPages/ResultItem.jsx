import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/ResultItem.css";

const ResultItem = (props) => {
  const animelink = props.title;

  return (
    <Row className="mb-3 mb-lg-4 justify-content-center wrapper-item">
      <Col xs={12} md={10} lg={8}>
        <a href={`/streaming/${animelink.split(" ").join("-").toLowerCase()}-eps-1`}>
          <Row className="g-0 border rounded overflow-hidden bg-grey">
            <Col xs={3} md={2} className="me-md-2 d-flex">
              <img src={props.srcImg} alt={props.title} className="img-fluid" />
            </Col>
            <Col xs={9} className="p-1 p-md-3">
              <h4 className="title-item">{props.title}</h4>
              <p className="description-item">{props.description}</p>
              <div className="status">
                <span className="badge text-bg-orange">
                  {props.episodeCount} Episode
                </span>
              </div>
            </Col>
          </Row>
        </a>
      </Col>
    </Row>
  );
};

export default ResultItem;
