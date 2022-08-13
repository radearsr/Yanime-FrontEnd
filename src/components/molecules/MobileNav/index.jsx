import React, { Fragment } from 'react';
import { useNavigate } from "react-router";
import {
  Navbar,
  Container
} from "react-bootstrap";
import {
  ClockHistory,
  HouseDoor,
  InfoSquare,
  Search,
} from "react-bootstrap-icons";
import {
  Gap,
} from "../../";
import "./mobileNav.css";


const MobileNav = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <Gap height={65} />
      <Navbar bg="light" expand="lg" className="mobile-nav" fixed="bottom">
        <Container className="justify-content-around">
          <div className="nav-mob-item" onClick={() => navigate("/")}>
            <HouseDoor size={20} />
            <p>Home</p>
          </div>
          <div className="nav-mob-item" onClick={() => navigate("/search")}>
            <Search size={20} />
            <p>Search</p>
          </div>
          <div className="nav-mob-item" onClick={() => navigate("/history")}>
            <ClockHistory size={20} />
            <p>History</p>
          </div>
          <div className="nav-mob-item" onClick={() => navigate("/about")}>
            <InfoSquare size={20} />
            <p>About</p>
          </div>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default MobileNav;