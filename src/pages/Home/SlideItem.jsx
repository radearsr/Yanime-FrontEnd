import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/SlideItem.css";

const SlideItem = (props) => {
  return (
    <Row
      className="slide-item p-3 justify-content-between g-0"
    >
      <div className="bg-poster" style={{ backgroundImage: `url('${props.posterUrl}')` }}></div>
      <Col xs={3} className="poster">
        <img src={props.posterUrl} alt={props.title} className="img-fluid" />
      </Col>
      <Col xs={8} lg={9} className="details">
        <h1 className="title-detail text">{props.title}</h1>
        <p className="description-detail text">{props.description}</p>
        <a href={props.linkWatch} className="btn btn-watch">
          Watch
        </a>
      </Col>
    </Row>
  );
};

export default SlideItem;
