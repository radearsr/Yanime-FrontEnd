import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles/ContentList.css";

const ContentList = (props) => {
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
            <SwiperSlide>
              <a href={"/"} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={"/"} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={"."} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={"/"} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={"."} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={"."} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={"."} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={"."} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href={"."} className="content-item">
                <div className="poster-content-item d-flex">
                  <img
                    src="/assets/images/poster1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p>lorem lorem ipsum dilir dolor</p>
              </a>
            </SwiperSlide>
          </Swiper>
        </main>
      </Container>
    </div>
  );
};

export default ContentList;
