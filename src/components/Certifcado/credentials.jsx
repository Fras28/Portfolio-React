import React from "react";
import "./credentials.css";
import Linkdin from "../assets/LinkedIn_Logo.svg.png"
import Henry from "../assets/Henry.png"
import EFSET from "../assets/EFSET.png"
import Separador from "../assets/separador1.png"

export const Certificates = () => {
  return (
    <>
    <div className="divSep" > <img className="separador" src={Separador} alt=""></img></div>
        <p className="titleCertf" id="credentials">Certificates</p>
    <div className="contCertf">
      <div className="cardCert">
        <div className="card-details">
          <p className="text-title">
            Full Stack Developer 
          </p>
          <img className="linkdinC" src={Henry} alt =""/>
          
          <p className="text-body">
            coding bootcamp +700hs knowledge :JS, HTML,CSS, Node, React, Redux,
            SQL
          </p>
        </div>
        <a
          href="https://certificates.soyhenry.com/cert?id=98a42830-8ee6-492d-9b6a-55d092249020"
          target="_blank"
          rel="noreferrer"
        >
          <button className="card-button">More info</button>
        </a>
      </div>
      <div className="cardCert">
        <div className="card-details">
          <p className="text-title">Fron End </p>
          <img className="linkdinC" src={Linkdin} alt =""/>
          <p className="text-body">
            {" "}
            30% better than the 865.0k people who have made this evaluation.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/skill-assessments/Desarrollo%20front%20end/report/?channel=FEED_SHOWCASE&practiceMode=&vanityNameContext=francoselvarolo"
          target="_blank"
          rel="noreferrer"
        >
          <button className="card-button">More info</button>
        </a>
      </div>
      <div className="cardCert">
        <div className="card-details">
          <p className="text-title">
            React.js Evaluation
          </p>
          <img className="linkdinC" src={Linkdin} alt =""/>
          <p className="text-body">
            Top 15% of the 792.7k people who have made this evaluation.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/skill-assessments/React.js/report/?practiceModal=&practiceMode="
          target="_blank"
          rel="noreferrer"
        >
          <button className="card-button">More info</button>
        </a>
      </div>
      <div className="cardCert">
        <div className="card-details">
          <p className="text-title">
            CSS Evaluation 
          </p>
          <img className="linkdinC" src={Linkdin} alt =""/>
          <p className="text-body">
            5 % mejor de las 1.7M personas que han hecho esta evaluación.
          </p>
        </div>
        <a
          href="https://www.linkedin.com/skill-assessments/Hojas%20de%20estilos%20en%20cascada%20(CSS)/report/"
          target="_blank"
          rel="noreferrer"
        >
          <button className="card-button">More info</button>
        </a>
      </div>
      <div className="cardCert">
        <div className="card-details">
          <div className="noScroll"></div>
          <p className="text-title">
            Agile methodologies 
          </p>
          <img className="linkdinC" src={Linkdin} alt =""/>
          <p className="text-body">
            5 % mejor de las 2.9M personas que han hecho esta evaluación
          </p>
        </div>
        <a href="https://www.linkedin.com/skill-assessments/Metodolog%C3%ADas%20%C3%A1giles/report/?practiceModal=&practiceMode=" target="_blank" rel="noreferrer">
          <button className="card-button">More info</button>
        </a>
      </div>
      <div className="cardCert">
        <div className="card-details">
     
          <p className="text-title">
            English:B2 Uper intermediant 
          </p>
          <img className="efset" src={EFSET} alt =""/>
        </div >
        <a href="https://www.efset.org/cert/fubXwi" target="_blank"  rel="noreferrer">
          <button className="card-button">More info</button>
        </a>
        </div>
    </div>
    </>
  );
};
