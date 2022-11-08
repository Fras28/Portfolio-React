import React from "react";
import "./header.css";
import fotoPerfil from "../assets/perfil s-fondo.png";
import { useState } from "react";

const Header = () => {


const infoPlus = ()=>{

    state.moreInfo === false?setState({...state,moreInfo:true}):setState({...state,moreInfo:false})
  
}

  const [state, setState] = useState({
    picShow: false,
    moreInfo:false
  });

  const showPic = () => {
    state.picShow === false
      ? setState({
        ...state,
          picShow: true,
        })
      : setState({
        ...state,
          picShow: false,
        });
  };

  // let handleOnChange = showPic;

  return (
    
      <header id="inicio">
          <div className="cardH">
            <div className="cardLeft">
              <p className="titleCard">Full Stack Developer</p>
              <div className="textHeader">
              <p className="subtitle1"> I always try to do my best and keep on learning in every project
                where I am involved.</p>
                {state.moreInfo===false?<p className="subtitle2">...</p>:<p className="subtitle2"> I love solving problems and teaching
                my colleagues what I have learned, just as I am also very
                attracted to listening to the logic that the rest of the team
                applies to solve the problems that are presented to them, I
                believe that every matter to be solved is a new experience that
                we nourishes</p>}
             <button onClick={infoPlus} className="buttonsInfo expandButton">+More info</button>
              </div>
            </div>
            <div className="cardRight">
              <div className="cardPic" onClick={showPic}>
              {state.picShow === true ? (
                  <img
                    onClick={showPic}
                    className="imgInicio"
                    src={fotoPerfil}
                    alt="foto perfil"/>              
              ) : (
                <p className="textImg">Click me! <br/>and i show the photo</p>      
                )}
                </div>
            </div>
          </div>
      </header>
  );
};

export default Header;
