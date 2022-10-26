import React, { Fragment, useState, useEffect } from "react";
import Hero from "./Hero";
import ContentList from "./ContentList";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import {BASE_URL} from "../../api/Functions";
import SkeletonList from "./SkeletonList";
import SkeletonBanner from "./SkeletonBanner";

const Home = () => {
  const [navClass, setNavClass] = useState("bg-transparent");
  const [searchClass, setSearchClass] = useState("input-search");

  const [animeSeries, setAnimeSeries] = useState([]);
  const [animeMovies, setAnimeMovies] = useState([]);
  const [animeBanner, setAnimeBanner] = useState([]);

  const [isLoadingMovie, setIsLoadingMovie] = useState(false);
  const [isLoadingSeries, setIsLoadingSeries] = useState(false);
  const [isLoadingBanner, setIsLoadingBanner] = useState(false);

  const handleNavbar = (e) => {
    const window = e.currentTarget;

    if (window.scrollY > 50) {
      setNavClass("bg-orange");
      setSearchClass("input-search scrolled");
    } else {
      setNavClass("bg-transparent");
      setSearchClass("input-search");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavbar(e));
  });

  useEffect(() => {
    fetch(`${BASE_URL}/api/animes/5/carousel`)
    .then((response) => response.json())
    .then((result) => setAnimeBanner(result.data.animes))
    .catch((error) => console.error(error)) 
   }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/api/animes?type=movie&limit=10`)
    .then((response) => response.json())
    .then((result) => {
      setIsLoadingMovie(false);
      return setAnimeMovies(result.data.animes)
    })
    .catch((error) => {
      console.error(error);
      return setIsLoadingMovie(true);
    })
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/api/animes?type=series&limit=10`)
    .then((response) => response.json())
    .then((result) => {
      setIsLoadingSeries(false);
      return setAnimeSeries(result.data.animes)
    })
    .catch((error) => {
      console.error(error);
      return setIsLoadingSeries(true);
    })
  }, []);
  
  return (
    <Fragment>
      <DesktopNav navbar={navClass} search={searchClass} />
      {isLoadingBanner ? 
        (<SkeletonBanner />) :
        (<Hero animes={animeBanner} />)
      }
      {isLoadingMovie ? 
        (<SkeletonList count={10} />) :
        (<ContentList titleContentList="Movie" animes={animeMovies} />)
      }
      {isLoadingSeries ? 
        (<SkeletonList count={10} />) :
        (<ContentList titleContentList="Series" animes={animeSeries} />)
      }
      <MobileNav />
    </Fragment>
  );
};

export default Home;
