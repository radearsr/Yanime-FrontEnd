import React from "react";
import { Row, Col } from "react-bootstrap";
import SearchNav from "../../components/SearchNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/SearchHeader.css";

const SearchHeader = () => {
  return (
    <Row className="search-header shadow-sm mb-3 mb-lg-4 justify-content-between fixed-top py-2 bg-orange">
      <Col xs={2} className="d-flex align-items-center">
        <a href="/" className="logo-brand">Yanime</a> 
      </Col>
      <SearchNav classInput="input-search" responsive="col-8 col-md-5" />
    </Row>
  );
};

export default SearchHeader;
