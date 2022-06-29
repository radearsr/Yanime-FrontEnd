import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles/ContentList.css";
import { getAllAnimeByCategory } from "../../api/Functions";

const ContentList = (props) => {
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    getAllAnimeByCategory(setAnimes, props.category);
  }, []);

  return (
    <div className="list-wrapper">
      <Container>
        <header>
          <h1 className="section-title">{props.titleContentList}</h1>
          <a href={"/"} className="link-more">
            Lebih banyak
          </a>
        </header>
        <main>
          <Swiper
            className="contents"
            slidesPerView={3}
            spaceBetween={10}
            breakpoints={{
              992: {
                slidesPerView: 7,
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
                <a 
                  href={`/streaming/${anime.title.split(" ").join("-").toLowerCase()}${anime.type === "series" ? "-eps-1" : ""}`}
                  className="content-item"
                >
                  <div className="poster-content-item d-flex">
                    <img
                      src={anime.poster}
                      alt={anime.title}
                      className="img-fluid"
                    />
                  </div>
                  <p>{anime.title}</p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </main>
      </Container>
    </div>
  );
};

export default ContentList;
