import React from "react";
import "./header.css";
import fotoPerfil from "../assets/Foto_CV.png";
import gitImg from "../assets/iconosSkills/gitHub.png";
import linkdin from "../assets/linkdin.png";

const Header = () => {
// let picProfile = "off" ;
// const showPic = ()=>{
//   console.log(picProfile)
//  picProfile === "off"?  picProfile= "on":
//  picProfile= "off";
// };

// let handleOnChange = showPic;


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
              {/* { picProfile === "on"? <img className="imgInicio" src={fotoPerfil} alt="" />:
              <img className="imgInicio"  src="https://img1.freepng.es/20180424/cye/kisspng-line-personalized-business-cards-5adf028a770f67.2193328615245646184877.jpg" alt="" />}
            <button onClick={showPic}> Show Pic</button> */}
            <img className="imgInicio" src={fotoPerfil} alt="" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
