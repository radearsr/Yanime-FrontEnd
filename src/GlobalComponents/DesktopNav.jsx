import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/DesktopNav.css";
import SearchNav from "./SearchNav";

const DesktopNav = (props) => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <Navbar className={`${props.navbar} fixed-top`} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">YaPro</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            href="/"
            className={`${splitLocation[1] === "" ? "active" : ""}`}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href="/history"
            className={`${splitLocation[1] === "history" ? "active" : ""}`}
          >
            History
          </Nav.Link>
          <Nav.Link
            href="/info"
            className={`${splitLocation[1] === "info" ? "active" : ""}`}
          >
            Info
          </Nav.Link>
        </Nav>
        <SearchNav classInput={props.search} responsive="col-md-4" />
      </Container>
    </Navbar>
  );
};

export default DesktopNav;
