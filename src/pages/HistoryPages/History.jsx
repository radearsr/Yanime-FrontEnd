import React, { Fragment } from "react";
import DesktopNav from "../../GlobalComponents/DesktopNav";
import MobileNav from "../../GlobalComponents/MobileNav";

const History = () => {
  return (
    <Fragment>
      <DesktopNav navbar="bg-orange" search="input-search scrolled" />
      <MobileNav />
    </Fragment>
  );
};

export default History;
