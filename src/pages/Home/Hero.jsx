import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import SlideItem from "./SlideItem";

const Hero = () => {
  return (
    <Carousel controls={false} indicators={false}>
      <Carousel.Item>
        <SlideItem
          posterUrl="/assets/images/poster1.jpg"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque
dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum
explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet"
          title="Lorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusumLorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusum"
        />
      </Carousel.Item>
      <Carousel.Item>
        <SlideItem
          posterUrl="/assets/images/poster2.jpg"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque
dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum
explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet"
          title="Lorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusumLorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusum"
        />
      </Carousel.Item>
      <Carousel.Item>
        <SlideItem
          posterUrl="/assets/images/poster3.jpg"
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque
dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum
explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos atque dolor excepturi aperiam, facere quae ducimus! Quos iusto laborum explicabo ipsa quod animi earum delectus quibusdam amet"
          title="Lorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusumLorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusum Lorem lorem oipsum oposim hpusum"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
