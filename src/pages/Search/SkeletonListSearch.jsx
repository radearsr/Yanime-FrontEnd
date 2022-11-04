import React from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/SearchResult.css";
import "./styles/SkeletonListSearch.css";

const SkeletonListSearch = ({ count }) => {
  return (
    <Container className="content-list" fluid="lg">
      {Array.apply(null, {length: count}).map(() => (
        <Row className="justify-content-center mb-2 mb-md-3 mb-lg-4">
          <Col xs={12} md={10} lg={8}>
            <div className="wrapper-search-result d-flex">
              <div className="skeleton skeleton-item-img"></div>
              <div className="about-result">
              <div className="skeleton skeleton-item-text"></div>
              <div className="skeleton skeleton-item-text"></div>
              <div className="skeleton skeleton-item-text"></div>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default SkeletonListSearch