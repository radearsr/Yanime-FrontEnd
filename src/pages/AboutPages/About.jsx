import React, { Fragment } from "react";
import ReactPlayer from "react-player";
import DesktopNav from "../../GlobalComponents/DesktopNav";
import MobileNav from "../../GlobalComponents/MobileNav";

const Info = () => {
  return (
    <Fragment>
      <DesktopNav navbar="bg-orange" search="input-search scrolled" />
      <ReactPlayer
        width={"100%"}
        height={"100%"}
        src={"http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"}
        playing={true}
        controls={true}
      />
      <MobileNav />
    </Fragment>
  );
};

export default Info;
