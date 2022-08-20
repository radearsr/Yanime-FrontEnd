import React, { Fragment } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import HistoryItem from "./HistoryItem";
import "./styles/history.css";

const History = () => {
  return (
    <Fragment>
      <DesktopNav navbar="bg-orange" search="input-search scrolled" />
      <Container fluid="lg" className="pt-2">
        <div className="wrapper-history">
          <Row className="justify-content-center mb-2 mb-md-3 mb-lg-4">
            <Col xs={12} md={10} lg={8}>
              <HistoryItem  
              linkVideo="kimi-no-nawa"
              title="Kimi No Nawa"
              thumbImg="https://185.224.82.193/img/87048.jpg"
              totalEps="12"
              currDuration="12:00"
              currEps="6"
              totalDuration="24:00"
            />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2 mb-md-3 mb-lg-4">
            <Col xs={12} md={10} lg={8}>
              <HistoryItem  
              linkVideo="kimi-no-nawa"
              title="Fate/Grand Order: Shinsei Entaku Ryouiki Camelot 2 - Paladin; Agateram"
              thumbImg="https://185.224.82.193/img/87048.jpg"
              totalEps="12"
              currDuration="12:00"
              currEps="6"
              totalDuration="24:00"
            />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2 mb-md-3 mb-lg-4">
            <Col xs={12} md={10} lg={8}>
              <HistoryItem  
              linkVideo="kimi-no-nawa"
              title="Kimi No Nawa"
              thumbImg="https://185.224.82.193/img/87048.jpg"
              totalEps="12"
              currDuration="12:00"
              currEps="6"
              totalDuration="24:00"
            />
            </Col>
          </Row>
        </div>
      </Container>
      <MobileNav />
    </Fragment>
  );
};

export default History;
