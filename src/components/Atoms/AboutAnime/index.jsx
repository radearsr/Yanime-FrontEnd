import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "./aboutAnime.css";

const AboutAnime = ({text}) => {

  const [textMore, setTextMore] = useState("Baca Selengkapnya");

  const handleSeeMore = () => {
    const sinopsis = document.querySelector(".text-sin");
    const seeMore = document.querySelector(".see-more");

    sinopsis.classList.toggle("more");
    
    if (textMore === "Baca Selengkapnya") {
      setTextMore("Baca lebih sedikit");
      seeMore.classList.remove("see-shadow");
    } else {
      setTextMore("Baca Selengkapnya");
      seeMore.classList.add("see-shadow");
    }
  }

  useEffect(() => {
    const sinopsis = document.querySelector(".text-sin");
    const seeMore = document.querySelector(".see-more");
    if (sinopsis.textContent.length > 336) {
      seeMore.classList.remove("d-none");
    } else {
      seeMore.classList.add("d-none");
    }
  }, []);

  return (
    <Container>
      <h3 className="title-sin">Sinopsis</h3>
      <Row>
        <Col xs={12} lg={10} xl={8}>
          <p className="text-sin">{text}</p>
          <p className="see-more" onClick={handleSeeMore}>{textMore}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutAnime;