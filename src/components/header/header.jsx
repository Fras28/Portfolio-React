import React from "react";
import "./header.css";
import fotoPerfil from "../assets/picNew1.png";
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
              <p className="titleCard" onClick={infoPlus}>Full Stack Developer</p>
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
                <div className="myLinkss">
                  <p className="ubi"><svg width="20" height="20" viewBox="0 0 289 446" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M144.32 0C64.612 0 0 64.6147 0 144.32C0 173.44 8.61455 200.539 23.4587 223.211L144.204 445.104V445.547L144.319 445.328L144.444 445.547V445.104L265.189 223.211C280.017 200.533 288.648 173.429 288.648 144.32C288.642 64.6067 224.033 0 144.314 0H144.32ZM144.32 36.312C203.971 36.312 252.331 84.6667 252.331 144.317C252.331 164.359 246.872 183.115 237.361 199.203C218.559 230.995 183.94 252.323 144.32 252.323C104.711 252.323 70.08 231.005 51.2787 199.203C41.7735 183.12 36.3147 164.353 36.3147 144.317C36.3147 84.6667 84.6747 36.312 144.32 36.312Z" fill="white"/>
<path d="M144.32 227.413C174.799 227.413 201.44 211.007 215.904 186.533C223.211 174.164 227.42 159.727 227.42 144.315C227.42 98.424 190.222 61.2267 144.321 61.2267C98.4303 61.2267 61.233 98.424 61.233 144.315C61.233 159.727 65.4309 174.169 72.7486 186.533C87.2073 211.003 113.847 227.413 144.322 227.413H144.32Z" fill="#715959"/>
</svg>
Argentina, Bahia Blanca. </p>
        <p className="contact">
          Contact
          <br />
          <a className="links" href="https://github.com/Fras28" Target="_blank">
            <svg
              className="linkC"
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.791 44.836C16.502 44.53 17 43.823 17 43V37.6C17 37.403 17.016 37.198 17.041 36.99C17.027 36.994 17.014 36.997 17 37C17 37 14 37 13.4 37C11.9 37 10.6 36.4 10 35.2C9.3 33.9 9 31.7 7.2 30.5C6.9 30.3 7.1 30 7.7 30C8.3 30.1 9.6 30.9 10.4 32C11.3 33.1 12.2 34 13.8 34C16.287 34 17.62 33.875 18.422 33.445C19.356 32.056 20.649 31 22 31V30.975C16.332 30.793 12.711 28.909 11.025 26C7.36 26.042 4.169 26.405 2.348 26.707C2.29 26.38 2.24 26.051 2.197 25.72C3.994 25.424 7.04 25.073 10.542 25.006C10.43 24.73 10.333 24.447 10.251 24.157C6.74 23.979 3.71 24.118 2.064 24.254C2.044 23.922 2.017 23.591 2.013 23.255C3.662 23.12 6.61 22.985 10.031 23.144C9.952 22.644 9.901 22.133 9.901 21.601C9.901 19.901 10.501 18.101 11.601 16.601C11.101 14.901 10.401 11.301 11.801 10.001C14.501 10.001 16.401 11.301 17.301 12.101C19 11.4 20.9 11 23 11C25.1 11 27 11.4 28.6 12.1C29.5 11.3 31.4 10 34.1 10C35.6 11.4 34.8 15 34.3 16.6C35.4 18.1 36 19.8 35.9 21.6C35.9 22.084 35.855 22.551 35.79 23.009C39.289 22.837 42.317 22.975 43.994 23.111C43.992 23.448 43.961 23.777 43.943 24.11C42.272 23.972 39.168 23.83 35.584 24.021C35.495 24.357 35.387 24.684 35.259 25.001C38.805 25.047 41.924 25.39 43.807 25.69C43.764 26.022 43.714 26.351 43.656 26.677C41.744 26.371 38.485 26.013 34.777 25.995C33.112 28.873 29.557 30.75 24 30.969V31C26.6 31 29 34.9 29 37.6V43C29 43.823 29.498 44.53 30.209 44.836C39.37 41.804 46 33.164 46 23C46 10.318 35.683 0 23 0C10.317 0 0 10.318 0 23C0 33.164 6.63 41.804 15.791 44.836Z"
                fill="#727272"
              />
            </svg>
          </a>
          <a
            className="links"
            href="https://www.linkedin.com/in/francoselvarolo/"
            Target="_blank"
          >
            <svg
              className="linkC"
              width="45"
              height="45"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23 0C10.318 0 0 10.317 0 23C0 35.683 10.318 46 23 46C35.682 46 46 35.683 46 23C46 10.317 35.682 0 23 0ZM16 33H12V18H16V33ZM14 15C12.895 15 12 14.105 12 13C12 11.895 12.895 11 14 11C15.105 11 16 11.895 16 13C16 14.105 15.105 15 14 15ZM35 33H31V28V25.5C31 23.575 29.425 22 27.5 22C25.575 22 24 23.575 24 25.5V33H20V18H24V19.816C25.168 18.694 26.752 18 28.5 18C32.09 18 35 20.91 35 24.5V33Z"
                fill="#727272"
              />
            </svg>
          </a>
          <a
            className="links"
            href="https://www.instagram.com/frans_selvarolo/"
            Target="_blank"
          >
            <svg
              className="linkC"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 0C5.83 0 0 5.83 0 13V31C0 38.17 5.83 44 13 44H31C38.17 44 44 38.17 44 31V13C44 5.83 38.17 0 31 0H13ZM34 8C35.1 8 36 8.9 36 10C36 11.1 35.1 12 34 12C32.9 12 32 11.1 32 10C32 8.9 32.9 8 34 8ZM22 11C28.07 11 33 15.93 33 22C33 28.07 28.07 33 22 33C15.93 33 11 28.07 11 22C11 15.93 15.93 11 22 11ZM22 13C17.04 13 13 17.04 13 22C13 26.96 17.04 31 22 31C26.96 31 31 26.96 31 22C31 17.04 26.96 13 22 13Z"
                fill="#727272"
              />
            </svg>
          </a>
        </p>
      </div>
            </div>
          </div>
         
      </header>
  );
};

export default Header;
