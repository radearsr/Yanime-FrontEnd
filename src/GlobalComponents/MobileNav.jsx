import React, { Fragment } from "react";
import {
  Container,
  Navbar 
} from "react-bootstrap";
import {
  HouseDoor,
  Search,
  ClockHistory,
  InfoSquare,
} from "react-bootstrap-icons";
import { useLocation } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/MobileNav.css";

const MobileNav = () => {
  const location = useLocation();

  const { pathname } = location;
  const [,currLoc] = pathname.split("/");
  console.log(currLoc);
  return (
    <Fragment>
      <Navbar bg="light" expand="lg" className="mobile-nav" fixed="bottom">
        <Container className="justify-content-around">
          <div className="nav-mob-item">
            <HouseDoor size={22} color="rgb(6, 17, 60)" />
            <p>Home</p>
          </div>
          <div className="nav-mob-item">
            <Search size={22} />
            <p>Search</p>
          </div>
          <div className="nav-mob-item">
            <ClockHistory size={22} className="active" />
            <p className="icon-name">History</p>
          </div>
          <div className="nav-mob-item">
            <InfoSquare size={22} />
            <p>Info</p>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default MobileNav;
