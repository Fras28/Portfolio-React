import React, { useEffect, useState } from "react";
import "./project.css";
import { arrProj } from "../assets/infoProjects";
import prevArrow from "../assets/prevArrow.png";
import nextArrow from "../assets/nextArrow.png";
import { Carousel } from "../carrusel/Carusel";


export const Project = () => {


  return (
    <div className="backlProj">
      <p className="titleCard" id="Project">
        Projects
      </p>
      <div className="conteItemsCarrusel">
        <Carousel/> 
      </div>
      ;
    </div>
  );
};
