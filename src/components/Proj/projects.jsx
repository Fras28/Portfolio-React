import React from "react";
import "./project.css";
import { Carousel } from "../carrusel/Carusel";

export const Project = () => {
  return (
    <div className="backlProj">
      <p className="titleCardP" id="Project">
        Projects
      </p>
      <div className="conteItemsCarrusel">
        <Carousel />
      </div>
      ;
    </div>
  );
};
