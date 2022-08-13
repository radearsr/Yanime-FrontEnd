import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="wrapper-about">
      <h1 className="title text-center">About Us</h1>
      <span className="text-underline"></span>
      <p className="about-text text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum vero ea laudantium cum enim eveniet veritatis aliquid natus, deleniti suscipit reprehenderit aliquam laborum eligendi dolorem autem quidem ipsa unde cumque.</p>
      <p className="copyright text-center">&copy; 2022 Yanime. All rights reserved.</p>
    </div>
  );
};

export default About;