import React, { Fragment } from "react";
import DesktopNav from "../../components/DesktopNav";
import MobileNav from "../../components/MobileNav";
import "./styles/about.css";

const About = () => {
  return (
    <Fragment>
      <DesktopNav navbar="bg-orange" search="input-search scrolled" />
      <div className="wrapper-about">
        <h1 className="title text-center">About Us</h1>
        <span className="text-underline"></span>
        <p className="about-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum vero ea laudantium cum enim eveniet veritatis aliquid natus, deleniti suscipit reprehenderit aliquam laborum eligendi dolorem autem quidem ipsa unde cumque.</p>
        <p className="copyright text-center">&copy; 2022 Yanime. All rights reserved.</p>
      </div>
      <MobileNav />
    </Fragment>
  );
};

export default About;