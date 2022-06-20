import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const { options } = props;

  useEffect(() => {
    const player = playerRef.current;

    if (!player) {
      const videoElement = videoRef.current;

      if (!videoElement) return;

      playerRef.current = videojs(videoElement, options);
    }

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);

  return (
    <div data-vjs-player>
      <video ref={videoRef} className="video-js vjs-big-play-centered"></video>
    </div>
  );
};

export default VideoJS;
