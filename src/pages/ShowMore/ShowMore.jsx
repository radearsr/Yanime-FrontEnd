import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";
import {
  ArrowLeftShort
} from "react-bootstrap-icons";
import {
 BASE_URL
} from "../../api/Functions";
import AnimeList from "./AnimeList";
import SkeletonShowMore from "./SkeletonShowMore";
import "./css/showMore.css";


const ShowMore = () => {
  const [animes, setAnimes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { type } = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${BASE_URL}/api/animes?type=${type}&limit=30`)
    .then(response => response.json())
    .then(result => setAnimes(result.data.animes))
  },[type]);


  return (
    <>
    <Navbar className="sticky-top py-2 nav-show-more mb-4 shadow" variant="dark" expand="lg">
      <Container className="justify-content-start">
        <Row className="align-items-center">
          <Col xs={4}>
            <ArrowLeftShort size={35} onClick={() => navigate("/")} style={{cursor: "pointer"}} />
          </Col>
          <Col xs={8}>
            <h1 className="show-more-title">Anime {type}</h1>
          </Col>
        </Row>
      </Container>
    </Navbar>
    <Container>
      <div className="show-more">
        {isLoading ? 
          (<SkeletonShowMore count={14} />) :
          (<AnimeList animes={animes} />)  
        }
      </div>
    </Container>

    </>
  );
};

export default ShowMore