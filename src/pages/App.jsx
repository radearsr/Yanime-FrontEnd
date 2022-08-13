import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainApp from "./MainApp";
import VideoStreaming from "./VideoStreaming";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainApp />} />
        <Route path="/streaming" element={<VideoStreaming />} />
      </Routes>
    </Router>
  );
};

export default App;