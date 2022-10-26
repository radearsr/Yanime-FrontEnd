import React from "react";
import { Container } from "react-bootstrap";
import {
  useNavigate
} from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles/ContentList.css";
import {
  AnimeItem
} from "../../components/Atoms";
import {
  loadDataHistoriesFromStorage,
} from "../../services/storageServices";


const ContentList = ({animes, titleContentList}) => {
  const navigate = useNavigate();

  const generateLink = (titleAnime, typeAnime, idAnime, epsAnime=1) => {
    const histories = loadDataHistoriesFromStorage();
    const filteredHistories = histories.filter((history) => history.identity === idAnime);
    if (filteredHistories.length > 0) {
      titleAnime = filteredHistories[0].title;
      typeAnime = filteredHistories[0].type;
      epsAnime = filteredHistories[0].currentEpisode;
    }
    return `${titleAnime.split(" ").join("-").toLowerCase()}${typeAnime === "series" ? `-eps-${epsAnime}` : ""}`;
  };

  return (
    <div className="list-wrapper">
      <Container>
        <header>
          <h1 className="section-title">{titleContentList}</h1>
          <p className="link-more" onClick={() => navigate(`/animes/${titleContentList.toLowerCase()}`)}>
            Lebih banyak
          </p>
        </header>
        <main>
          <Swiper
            className="contents"
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              1400: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              992: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
          > 
            {animes.map((anime, index) => (
              <SwiperSlide key={index}>
                <AnimeItem 
                  key={index}
                  idAnime={anime.id}
                  poster={anime.poster}
                  title={anime.title}
                  linkEps={generateLink(anime.title, anime.type, anime.id)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </Container>
    </div>
  );
};

export default ContentList;
