import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import HistoryItem from "./HistoryItem";
import "./styles/history.css";

const History = () => {
  return (
    <Fragment>
      <DesktopNav navbar="bg-orange" search="input-search scrolled" />
      <Container fluid="lg">
        <div className="wrapper-history">
          <HistoryItem  
            linkVideo="kimi-no-nawa"
            title="Kimi No Nawa"
            thumbImg="https://185.224.82.193/img/87048.jpg"
            totalEps="12"
            currDuration="12:00"
            currEps="6"
            totalDuration="24:00"
          />
        </div>
      </Container>
      <MobileNav />
    </Fragment>
  );
};

export default History;
