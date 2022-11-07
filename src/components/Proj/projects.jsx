import React from "react";
import "./project.css";
import { Carousel } from "../carrusel/Carusel";

export const Project = () => {
  return (
    <div className="backlProj" id="Project">
      <p className="titleCardP" >
        Projects
      </p>
      <div className="conteItemsCarrusel">
        <Carousel />
      </div>
      ;
    </div>
  );
};
