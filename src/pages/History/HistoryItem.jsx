import React from "react";
import {
  Row,
  Col,
} from "react-bootstrap";
import "./styles/historyItem.css";


const HistoryItem = (props) => {
  return (
    <div className="wrapper-history-item">
      <Row className="mb-3 mb-lg-4 justify-content-center wrapper-item">
        <Col xs={12} md={10} lg={8}>
          <a href={`/streaming/${props.linkVideo}`}>
            <Row className="g-0 border rounded overflow-hidden bg-grey">
              <Col xs={3} md={2} className="me-md-2 d-flex">
                <img src={props.thumbImg} alt={props.title} className="img-fluid" />
              </Col>
              <Col xs={9} className="p-3 p-md-3">
                <h4 className="title-item text">{props.title}</h4>
                <p className="current-eps">Episode {props.currEps} / Episode {props.totalEps}</p>
                <p className="current-duration">{props.currDuration}/ {props.totalDuration}</p>
              </Col>
            </Row>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default HistoryItem;
