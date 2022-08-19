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
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/MobileNav.css";

const MobileNav = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { pathname } = location;
  const [,currLoc] = pathname.split("/");

  const checkActivePage = (thisVal, curVal) => {
    return thisVal === curVal ? "active" : "no-act";
  };

  return (
    <Fragment>
      <div className="visible-mob-nav"></div>
      <Navbar bg="light" expand="lg" className="mobile-nav" fixed="bottom">
        <Container className="justify-content-around">
          <div className="nav-mob-item" onClick={() => navigate("/")}>
            <HouseDoor
              size={25}
              className={checkActivePage("", currLoc)}
            />
            <p className={`icon-label ${checkActivePage("", currLoc)}`}>Home</p>
          </div>
          <div className="nav-mob-item" onClick={() => navigate("/search")}>
            <Search
              size={25}
              className={checkActivePage("search", currLoc)}
            />
            <p className={`icon-label ${checkActivePage("search", currLoc)}`}>Search</p>
          </div>
          <div className="nav-mob-item" onClick={() => navigate("/history")}>
            <ClockHistory
              size={25}
              className={checkActivePage("history", currLoc)}
            />
            <p className={`icon-label ${checkActivePage("history", currLoc)}`}>History</p>
          </div>
          <div className="nav-mob-item" onClick={() => navigate("/about")}>
            <InfoSquare
              size={25}
              className={checkActivePage("about", currLoc)}
            />
            <p className={`icon-label ${checkActivePage("about", currLoc)}`}>About</p>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default MobileNav;
