import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/SearchNav.css";

const NavSearch = (props) => {
  return (
    <form className={`${props.responsive} search-group g-0`} action="/search" method="GET">
      <Row className="g-0">
        <Col xs={9} md={10}>
          <input
            type="search"
            className={props.classInput}
            autoComplete="off"
            placeholder="Cari Anime..."
            name="query"
          />
        </Col>
        <Col xs={3} md={2}>
          <button type="submit" className="btn btn-action">
            <span className="icon icon-search nav-search"></span>
          </button>
        </Col>
      </Row>
    </form>
  );
};

export default NavSearch;
