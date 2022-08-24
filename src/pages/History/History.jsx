import React, { Fragment, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import HistoryItem from "./HistoryItem";
import "./styles/history.css";
import {
  loadDataHistoriesFromStorage,
} from "../../services/storageServices";

const History = () => {
  const [dataHistories, setDataHistories] = useState(loadDataHistoriesFromStorage());
  
  const addLeadingZeros = (num, totalLength) => {
    return String(num).padStart(totalLength, "0");
  }

  const reformatTime = (seconds) => {
    let secondLeft = Math.floor(seconds);
    
    const hours = addLeadingZeros(Math.floor(secondLeft / 3600), 2);
    secondLeft = seconds % 3600;
    
    const mins = addLeadingZeros(Math.floor(secondLeft / 60), 2);
    secondLeft = addLeadingZeros(Math.floor(secondLeft % 60), 2);
    
    if (hours < 1) {
      return `${mins}:${secondLeft}`;
    }
    return `${hours}:${mins}:${secondLeft}`;
  };

  const handleRemoveHistories = () => {
    setDataHistories(loadDataHistoriesFromStorage());
  };
  
  return (
    <Fragment>
      <DesktopNav navbar="bg-orange" search="input-search scrolled" />
      <Container fluid="lg" className="pt-2">
        <div className="wrapper-history">
          {dataHistories.map((dataHistori) => (
            <Row className="justify-content-center mb-2 mb-md-3 mb-lg-4">
              <Col xs={12} md={10} lg={8}>
                <HistoryItem  
                  linkVideo={dataHistori.linkVideo}
                  title={dataHistori.animeTitle}
                  thumbImg={dataHistori.animePoster}
                  totalEps={dataHistori.totalEps}
                  currDuration={reformatTime(dataHistori.currentDuration)}
                  currEps={dataHistori.currentEps}
                  totalDuration={reformatTime(dataHistori.totalDuration)}
                  onRemove={handleRemoveHistories}
                />
            </Col>
            </Row>
          ))}
        </div>
      </Container>
      <MobileNav />
    </Fragment>
  );
};

export default History;
