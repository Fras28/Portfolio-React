import React from "react";
import "./nav.css";

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="contenedor">
        <div className="navStart">
          <a href="#inicio">
            <p className="myName">Franco Selvarolo</p>
          </a>
        </div>
        <div className="navEnd">
          <a className="buttonText" href="#aboutMe">
            <b>About me</b>
          </a>
          <a className="buttonText" href="#Project">
            <b>Projects</b>
          </a>
          <a className="buttonText" href="#credentials">
            <b>Certificates</b>
          </a>
          <a
            className="buttonText"
            rel="noreferrer"
            href="mailto:fselvarolo28@gmail.com"
          >
            <b className="outLineButton">Get in touch</b>
          </a>
        </div>
      </div>
    </nav>
  );
};
