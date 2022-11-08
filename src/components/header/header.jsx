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
             <button onClick={infoPlus} className="buttonsInfo expandButton"><svg className="plusText" width="20" height="20" viewBox="0 0 607 607" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M303.333 606.667C284.667 606.667 269.5 591.5 269.5 572.833V337.167H33.8333C15.1667 337.167 0 322 0 303.333C0 284.667 15.1667 269.5 33.8333 269.5H269.5V33.8333C269.5 15.1667 284.667 0 303.333 0C322 0 337.167 15.1667 337.167 33.8333V269.5H572.833C591.5 269.5 606.667 284.667 606.667 303.333C606.667 322 591.5 337.167 572.833 337.167H337.167V572.833C337.167 591.5 322 606.667 303.333 606.667ZM33.84 292.827C28.0067 292.827 23.34 297.493 23.34 303.327C23.34 309.16 28.0067 313.827 33.84 313.827H292.84V572.827C292.84 578.66 297.507 583.327 303.34 583.327C309.173 583.327 313.84 578.66 313.84 572.827V313.827H572.84C578.673 313.827 583.34 309.16 583.34 303.327C583.34 297.493 578.673 292.827 572.84 292.827H313.84V33.8267C313.84 27.9933 309.173 23.3267 303.34 23.3267C297.507 23.3267 292.84 27.9933 292.84 33.8267V292.827H33.84Z" fill="white"/>
</svg>  More info</button>
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
