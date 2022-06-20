import React from "react";
import ReactPlayer from "react-player";
// import { Container } from "react-bootstrap";
import VideoControl from "./VideoControl";
import "./VideoUI.css";

// import video from "../../public/assets/videos/video.mp4";

const VideoUI = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <div className="video-wrapper">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url={`http://clips.vorwaerts-gmbh.de/VfE_html5.mp4`}
          playing={false}
        />
        <VideoControl />
      </div>
    </div>
  );
};

export default VideoUI;
