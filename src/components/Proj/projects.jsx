import React, { useEffect, useState } from "react";
import "./project.css";
import { arrProj } from "../assets/infoProjects";
import prevArrow from "../assets/prevArrow.png";
import nextArrow from "../assets/nextArrow.png";

export const Project = () => {
  console.log(arrProj);
  const [index, setIndex] = useState(0);

  const mod = (n, m) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

    //   setIndex((index + 1) % arrProj.length);
    //   console.log(index);
 

  return (
    <div className="backlProj">
      <p className="titleCard" id="Project">
        Projects
      </p>
      <div className="conteItemsCarrusel">
        {arrProj?.map((p) => {
          return (
            <div className="itemCarrusel" id="project1">
              <img src={p.background} alt="" className="backgoundProject" />
              <p className="titleCardP">{p.title}</p>
              <div className="carrusel">
                <div>
                  <p className="dateProj">{p.date}</p>
                  <p className="detailProj">{p.detail}</p>
                </div>
              </div>
              <div className="nextPrev">
                <button className="carrBtn">
                  <img src={prevArrow} alt="" width="30px" />
               
                </button>
                <button className="carrBtn">

                  <img src={nextArrow} alt="" width="30px" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};
