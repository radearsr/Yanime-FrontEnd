import React, { Fragment, useState, useEffect } from "react";
import Hero from "./Hero";
import ContentList from "./ContentList";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";

const Home = () => {
  const [navClass, setNavClass] = useState("bg-transparent");
  const [searchClass, setSearchClass] = useState("input-search");

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
  
  return (
    <Fragment>
      <DesktopNav navbar={navClass} search={searchClass} />
      <Hero />
      <ContentList titleContentList="Movie" category="movie" />
      <ContentList titleContentList="Series" category="series" />
      <MobileNav />
    </Fragment>
  );
};

export default Home;
