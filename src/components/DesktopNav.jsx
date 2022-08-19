import React from "react";
import {
  Navbar,
  Container,
  Nav,
} from "react-bootstrap";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/DesktopNav.css";
import SearchNav from "./SearchNav";

const DesktopNav = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;

  const [,curLoc] = pathname.split("/");

  const checkActivePage = (thisVal, curVal) => {
    return thisVal === curVal ? "active" : "";
  };

  return (
    <Navbar className={`${props.navbar} fixed-top`} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>Yapro</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            onClick={() => navigate("/")}
            className={checkActivePage("", curLoc)}
          >
            Home
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/history")}
            className={checkActivePage("history", curLoc)}
          >
            History
          </Nav.Link>
          <Nav.Link
            onClick={() => navigate("/about")}
            className={checkActivePage("about", curLoc)}
          >
            About Us
          </Nav.Link>
        </Nav>
        <SearchNav classInput={props.search} responsive="col-md-4" />
      </Container>
    </Navbar>
  );
};

export default DesktopNav;
