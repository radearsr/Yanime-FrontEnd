import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/MobileNav.css";
import { useLocation } from "react-router";

const MobileNav = () => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <Container fluid="lg" className="wrapper-mob-nav">
      <Row className="mob-nav py-2">
        <Col
          xs={3}
          className={`mob-nav-item ${splitLocation[1] === "" ? "active" : ""}`}
        >
          <a href="/" className="mob-link" activeClassName="">
            <span className="icon icon-nav home"></span>
            <span>Home</span>
          </a>
        </Col>
        <Col
          xs={3}
          className={`mob-nav-item ${
            splitLocation[1] === "search" ? "active" : ""
          }`}
        >
          <a href="/search" className="mob-link">
            <span className="icon icon-nav search"></span>
            <span>Search</span>
          </a>
        </Col>
        <Col
          xs={3}
          className={`mob-nav-item ${
            splitLocation[1] === "history" ? "active" : ""
          }`}
        >
          <a href="/history" className="mob-link">
            <span className="icon icon-nav history"></span>
            <span>History</span>
          </a>
        </Col>
        <Col
          xs={3}
          className={`mob-nav-item ${
            splitLocation[1] === "info" ? "active" : ""
          }`}
        >
          <a href="/info" className="mob-link">
            <span className="icon icon-nav info"></span>
            <span>Info</span>
          </a>
        </Col>
      </Row>
      <div className="visible-mob-nav"></div>
    </Container>
  );
};

export default MobileNav;
