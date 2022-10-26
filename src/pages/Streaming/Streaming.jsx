import React, {  useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router";
import { Container, Row, Col, Navbar,  } from "react-bootstrap";
import {
  ArrowLeftShort
} from "react-bootstrap-icons"
import "bootstrap/dist/css/bootstrap.css";
import "./styles/Streaming.css";
import { getDetailAnime } from "../../api/Functions";
import {
  EpisodeItem,
  AboutAnime,
} from "../../components/Atoms";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  saveHistory,
  searchDataHistory
} from "../../services/storageServices";

const Streaming = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const videoPlayer = useRef(null);

  const { animeId } = useParams();

  const { pathname } = location;
  const [,,,urlEpisode] = pathname.split("/");

  const [animes, setAnimes] = useState([]);

  const activeEps = urlEpisode.includes("eps") ? urlEpisode.split("-")[urlEpisode.split("-").length - 1] : "1";

  const activeEpisode = (url) => {
    return url.includes("eps") ? url.split("-")[url.split("-").length - 1] : "1";
  };

  const generateLinkEpisode = (type, title, episode="") => {
    return type === "movie" ? 
      title.split(" ").join("-").toLowerCase() :
      `${title.split(" ").join("-").toLowerCase()}-eps-${episode}`;
  };

  const setVideoDetailsToLocalStorage = ({id, type, eps_count, title, poster}, currentEpisode, currentDuration=0) => {
    if (title === undefined) return;    
    if (currentDuration !== 0) {
      currentDuration = videoPlayer.current.getCurrentTime();
    }
    const totalDuration = videoPlayer.current.getDuration();
    saveHistory({
      identity: id,
      title,
      poster,
      type,
      totalDuration,
      currentDuration,
      totalEpisode: eps_count,
      currentEpisode,
    });
  };

  const handleStartVideoPlayer = (identity) => {
    const history = searchDataHistory(identity);
    if (history.length > 0) {
      const [data] = history
      videoPlayer.current.seekTo(data.currentDuration, "seconds");
    } else {
      return false;
    }
  }

  useEffect(() => {
    const activeEps = activeEpisode(urlEpisode);
    getDetailAnime(setAnimes, `${animeId}-${activeEps}`);
  }, [animeId, urlEpisode]);
  
  useEffect(() => {
    window.addEventListener("beforeunload", () => setVideoDetailsToLocalStorage(...animes, activeEpisode(urlEpisode), 1));
  });

  useEffect(() => {
    const history = searchDataHistory(animeId);
    const activeEps = activeEpisode(urlEpisode);
    console.log("history", history);
    if ((history.length > 0) && (history[0].currentEpisode === activeEps)) {
      return;
    } else {
      setVideoDetailsToLocalStorage(...animes, activeEps);
    }
  }, [animes, animeId, urlEpisode]);


  return (
    animes.map((anime, index) => (
      <>
        <div className="py-2 mb-4 shadow bg">
          <Container className="justify-content-start">
            <Row className="align-items-center">
              <Col xs={2} lg={1} className="d-flex justify-content-end">
                <ArrowLeftShort size={35} onClick={() => navigate("/")} style={{cursor: "pointer"}} />
              </Col>
              <Col xs={10} lg={6}>
                <p className="mb-0 text streaming-title fw-bold">{anime.title}</p>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className="streaming-container" key={index}>
          <Row className="g-0 justify-content-between mb-4">
            <Col xs={12} lg={9} className="g-0">
              <div className="video-wrapper">
                <ReactPlayer 
                  ref={videoPlayer}
                  width={"100%"}
                  height={"100%"}
                  url={anime.videos[0].gdrive}
                  onPlay={() => setVideoDetailsToLocalStorage(anime, activeEpisode(urlEpisode), 1)}
                  onPause={() => setVideoDetailsToLocalStorage(anime, activeEpisode(urlEpisode), 1)}
                  onStart={() => handleStartVideoPlayer(anime.id)}
                  playing
                  controls
                />
              </div>
            </Col>
            <Col xs={12} lg={3} className="eps-section">
              <h3 className="title-episode-list">Daftar Episode</h3>
              <div className="episode-list">
                  {Array.apply(null, {length: anime.eps_count}).map((data, index) => (
                    <EpisodeItem
                      key={index}
                      number={index + 1}
                      linkVideo={`${anime.id}/${generateLinkEpisode(anime.type, anime.title, index + 1)}`}
                      activePage={activeEps}
                    />
                  ))}
              </div>
            </Col>
          </Row>
          <AboutAnime text={anime.descriptions} />
        </Container>
      </>
    ))
  );
};

export default Streaming;
