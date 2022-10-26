import React from "react";
import { Row } from "react-bootstrap";
import SearchNav from "../../components/SearchNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/SearchHeader.css";

const SearchHeader = () => {
  return (
    <Row className="search-header shadow-sm mb-3 mb-lg-4 justify-content-center fixed-top py-2 bg-orange">
      <SearchNav classInput="input-search" responsive="col-11 col-md-10" />
    </Row>
  );
};

export default SearchHeader;
