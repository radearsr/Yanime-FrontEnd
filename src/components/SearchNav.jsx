import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/SearchNav.css";

const NavSearch = (props) => {
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    const inputValue = e.target.firstChild.firstChild.firstChild.value;
    console.log(inputValue);
    navigate(`/search?q=${inputValue}`);  
  };

  return (
    <form className={`${props.responsive} search-group g-0`} onSubmit={formHandler}>
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
