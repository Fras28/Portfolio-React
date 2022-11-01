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
              <div className="myLinkss">
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
                  </svg></a>
                  <a
        className="links"
        href="https://www.linkedin.com/in/francoselvarolo/"
        Target="_blank"
      ><svg
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
                  </svg></a>
                  <a
        className="links"
        href="https://www.instagram.com/frans_selvarolo/"
        Target="_blank"
      ><svg
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
                  </svg></a>
                </p>
              </div>
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
