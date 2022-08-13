import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import {
  DesktopNav,
  MobileNav,
} from "../../components";
import Home from "../Home";
import Search from "../Search";
import History from '../History';
import About from "../About";
import NoMatch from '../NoMatch';
import "./mainApp.css";

const MainApp = () => {
  return (
    <div className="wrapper-main-app">
      <DesktopNav />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/search" element={ <Search />} />
        <Route path="/history" element={ <History />} />
        <Route path="/about" element={ <About />} />
        <Route path="/*" element={ <NoMatch />} />
      </Routes>
      <MobileNav />
    </div>
  );
};

export default MainApp