import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./HomePages/Home";
import Search from "./SearchPages/Search";
import History from "./HistoryPages/History";
import Info from "./InfoPages/Info";
import Streaming from "./StreamingPages/Streaming";
import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/history" element={<History />} />
      <Route path="/info" element={<Info />} />
      <Route path="/streaming" element={<Streaming />} />
    </Routes>
  );
};

export default App;
