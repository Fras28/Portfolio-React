import React from "react";
import BBimg from "../assets/bbPic.png";
import GamesImg from "../assets/imgVideogames.png";
import CountryImg from "../assets/Countries.png";
import SvalyImg from "../assets/svaly1.jpg";
import Bfood from "../assets/bahia food.png"
import "./carusel.css";

export const Carousel = () => {
  return (
    <div className="carrusCont">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
            <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>
        <div className="carousel-inner">          
          <a
            href="https://blockbuster-pf.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="carousel-item active">
              <div className="containerPic">
                <img src={BBimg} className="d-block" alt="..." />
              </div>
              <div className="backInfo1">
                <p className="projectDate">10 / 10 / 22</p>
                <p className="project underline acces"> Block Buster</p>

                <p className="projectDet">
                  Led the creation of an OTT streaming platform/service for
                  online movies and series.<br/>
                  Responsible for designing and creating the backend, landing page, home page and about us
                </p>
                <p className="projectDet1">
                  <b>Role: </b> Desing & Development.
                </p>
                <p className="projectDet2">
                  <b>Made With: </b> TypeScript, Sequelize, Express and
                  PostgreSQL & Nodemailer notifications in the Back-End and
                  React, Redux-Toolkit, Cloudinary, auth0(google log-in) &
                  Paypal payment in Front-End.
                </p>
              </div>
            </div>
          </a>
          

          <div className="carousel-item">
          <a
            href="https://bahiablanca-restos.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="containerPic">
              {" "}
              <img src={Bfood} className="d-block " alt="..." />
            </div>
            <div className="backInfo2">
              <p className="projectDate">20 / 11 / 22</p>
              <p className="project underline acces"> Bahia Blanca Food</p>

              <p className="projectDet">
              Application for restaurants/bars/coffee shops. In this application, the letters of each of the added businesses appear. You can also see each of the variants that I offer depending on the taste of each client. Each letter has a shopping cart and the option to place an order through it
              </p>

              <p className="projectDet1">
                <b>Role: </b> Desing & Development.
              </p>
              <p className="projectDet2">
                <b>Made With: </b>JavaScript, React, Redux-Toolkit, CSS, HTML5
              </p>
            </div>
            </a>
          </div>






          <div className="carousel-item">
          <a
            href="https://github.com/Fras28/VideoGamesUniverse"
            target="_blank"
            rel="noreferrer"
          >
            <div className="containerPic">
              {" "}
              <img src={GamesImg} className="d-block " alt="..." />
            </div>
            <div className="backInfo2">
              <p className="projectDate">25 / 7 / 22</p>
              <p className="project underline acces"> VideoGames</p>

              <p className="projectDet">
                An information platform for video games Games can be added to
                our database with the possibility of adding more. This included
                the following functions: searching, filtering, ordering,
                creating, and adding information.
              </p>

              <p className="projectDet1">
                <b>Role: </b> Desing & Development.
              </p>
              <p className="projectDet2">
                <b>Made With: </b>JavaScript, React, Redux, CSS, HTML5,API Rest, Express,
                Sequalize, Node, SQL{" "}
              </p>
            </div>
            </a>
          </div>
          <div className="carousel-item">
          <a
            href="https://github.com/Fras28/Info-Countries"
            target="_blank"
            rel="noreferrer"
          >
            <div className="containerPic">
              <img src={CountryImg} className="d-block" alt="..." />
            </div>
            <div className="backInfo3">
              <p className="projectDate">25 / 8 / 22</p>
              <p className="project underline acces">Countries-Info</p>
              <p className="projectDet">
                In this project, the objective was to obtain relevant
                information from all countries in order to provide it to users.
                This included the following functions: searching, filtering,
                ordering creating, and adding activities to the countries.
              </p>

              <p className="projectDet1">
                <b>Role: </b> Desing & Development.
              </p>
              <p className="projectDet2">
                <b>Made With: </b>JavaScript, React, Redux, CSS, HTML5,API Rest, Express,
                Sequalize, Node, SQL{" "}
              </p>
            </div>
            </a>
          </div>
          <div className="carousel-item">
            <div className="containerPic">
              <img src={SvalyImg} className="d-block" alt="..." />
            </div>
            <div className="backInfo4">
              <p className="projectDate">25 / 10 / 20</p>

              <p className="project">Svaly - Shifter</p>
              <p className="projectDet">
                application to make daily reservations in gyms, with personal
                acount and stats
              </p>

              <p className="projectDet1">
                <b>Role: </b> Desing & Development.
              </p>
              <p className="projectDet2">
                <b>Made With: </b>JavaScript, React, Redux, CSS, HTML5, Express,
                Sequalize, Node, SQL{" "}
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
