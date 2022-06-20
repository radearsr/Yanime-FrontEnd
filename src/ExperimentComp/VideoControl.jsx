import React from "react";
import {
  SkipBackwardFill,
  SkipForwardFill,
  PauseFill,
  PlayFill,
} from "react-bootstrap-icons";
import "./VideoControl.css";

const VideoControl = () => {
  return (
    <div className="video-control">
      <div className="header-control">
        <p>Lorem, ipsum.</p>
      </div>
      <div className="main-control">
        <SkipBackwardFill className="icon icon-backward" />
        {/* <PauseFill className="icon icon-pause" /> */}
        <PlayFill className="icon icon-play" />
        <SkipForwardFill className="icon icon-forward" />
      </div>
      <div className="footer-control">
        <p>Lorem, ipsum.</p>
      </div>
    </div>
  );
};

export default VideoControl;
