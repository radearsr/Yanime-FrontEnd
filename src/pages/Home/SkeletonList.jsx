import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from "react-bootstrap";
import "swiper/css";
import "./styles/SkeletonList.css";

const SkeletonList = ({count}) => {
  return (
    <div className="list-wrapper">
    <Container>
      <header>
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-more"></div>
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
          {Array.apply(null, {length: count}).map(() => (
            <SwiperSlide>
              <div className="skeleton skeleton-img"></div>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </main>
    </Container>
  </div>
  );
};

export default SkeletonList;