import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Navbar,

} from "react-bootstrap";
import {
  ArrowLeftShort
} from "react-bootstrap-icons";
import {
 BASE_URL
} from "../../api/Functions";
import { AnimeItem } from "../../components/Atoms";
import "./showMore.css";


const ShowMore = () => {
  const [animes, setAnimes] = useState([]);
  const { type } = useParams();
  
  const navigate = useNavigate();

  const generateLink = (titleAnime, typeAnime) => {
    return `${titleAnime.split(" ").join("-").toLowerCase()}${typeAnime === "series" ? "-eps-1" : ""}`;
  };

  useEffect(() => {
    fetch(`${BASE_URL}/api/animes?type=${type}&limit=30`)
    .then(response => response.json())
    .then(result => setAnimes(result.data.animes))
  },[type]);


  return (
    <>
    <Navbar className="sticky-top py-2 nav-show-more mb-4 shadow" variant="dark" expand="lg">
      <Container className="justify-content-start">
        <ArrowLeftShort size={35} onClick={() => navigate("/")} style={{cursor: "pointer"}} />
      </Container>
    </Navbar>
    <Container>
      <h1 className="show-more-title mb-3">Anime {type}</h1>
      <div className="show-more">
        {animes.map((anime, index) => (
          <AnimeItem
            key={index}
            idAnime={anime.id}
            poster={anime.poster}
            title={anime.title}
            linkEps={generateLink(anime.title, anime.type)}
          />
        ))}
      </div>
    </Container>

    </>
  );
};

export default ShowMore