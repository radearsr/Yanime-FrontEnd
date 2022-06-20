import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/SlideItem.css";

const SlideItem = (props) => {
  return (
    <Row
      className="slide-item p-3 justify-content-between g-0"
      style={{ backgroundImage: `url('${props.posterUrl}')` }}
    >
      <Col xs={3} className="poster">
        <img src={props.posterUrl} alt="" className="img-fluid" />
      </Col>
      <Col xs={8} lg={9} className="details">
        <h1 className="title-detail">{props.title}</h1>
        <p className="description-detail">{props.description}</p>
        <a href={props.linkWatch} className="btn btn-watch">
          Watch
        </a>
      </Col>
    </Row>
  );
};

export default SlideItem;
