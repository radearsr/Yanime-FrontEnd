import React from "react";
import ReactDOM from "react-dom/client";
import VideoUI from "./ExperimentComp/VideoUI";
// import Endpoint from "./ExperimentComp/EndPoint";
import { BrowserRouter } from "react-router-dom";
import App from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <VideoUI />
//   </React.StrictMode>
// );
