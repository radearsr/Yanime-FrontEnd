import React, { useEffect, useState } from "react";
import {
  Stack,
} from "react-bootstrap";
import "./aboutAnime.css";

const AboutAnime = ({text}) => {

  const [textMore, setTextMore] = useState("See More");

  const handleSeeMore = () => {
    const sinopsis = document.querySelector(".text-sin");
    const seeMore = document.querySelector(".see-more");

    sinopsis.classList.toggle("more");
    
    if (textMore === "See More") {
      setTextMore("See Less");
      seeMore.classList.remove("see-shadow");
    } else {
      setTextMore("See More");
      seeMore.classList.add("see-shadow");
    }
  }

  useEffect(() => {
    const sinopsis = document.querySelector(".text-sin");
    const seeMore = document.querySelector(".see-more");
    console.log(sinopsis.clientHeight);
    if (sinopsis.clientHeight >= 65) {
      seeMore.classList.remove("d-none");
    } else {
      seeMore.classList.add("d-none");
    }
  }, []);

  return (
    <div className="wrapper-about-anime">
      <Stack direction="vertical" gap={3}>
        <h3 className="title-sin">Sinopsis</h3>
        <p className="text-sin">{text}</p>
      </Stack>
      <p className="see-more see-shadow" onClick={handleSeeMore}>{textMore}</p>
    </div>
  );
};

export default AboutAnime;