import React from "react";
import "./header.css";
import fotoPerfil from "../assets/Foto_CV.png";
import gitImg from "../assets/iconosSkills/gitHub.png";
import linkdin from "../assets/linkdin.png";

const Header = () => {
  return (
    <>
      <header id="inicio">
        <div className="contemedorCard">
          <div className="card">
            <div className="cardLeft">
              <p className="titleCard">Full Stack Developer</p>
              <p className="subtitle">
                I always try to do my best and keep on learning in every project
                where I am involved.
              </p>
            </div>
            <div className="borde">
              <img className="imgInicio" src={fotoPerfil} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
