import React from "react";
import BBimg from "../assets/blockbusterImg.jpg"
import GamesImg from "../assets/GameU.jpg"
import CountryImg from "../assets/countries img.jpg"
import SvalyImg from "../assets/svaly1.jpg"
import "./carusel.css"

export const Carousel = ()=>{
    return(
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div className="carousel-inner">
    <a href="https://blockbuster-pf.vercel.app/" target="_blank" rel="noreferrer" >
    <div className="carousel-item active">
    
      <p className="project">Block Buster</p>
      <p className="projectDate">10 / 10/ 22</p>
      <p className="projectDet">Led the creation of an OTT streaming platform/service for online movies and series.</p>
      <p className="projectDet1"><b>Role: </b> Desing & Development.</p>
      <p className="projectDet2"><b>Made With: </b>  TypeScript, Sequelize, Express and PostgreSQL & Nodemailer notifications in the Back-End and React, Redux-Toolkit, Cloudinary, auth0(google log-in) & Paypal payment in Front-End.</p>
 
      
      <img src={BBimg} className="d-block" alt="..."/>
    </div>  </a>
    <div className="carousel-item">
    <p className="project">VideoGames</p>
      <p className="projectDate">25 / 7 / 22</p>
      <p className="projectDet">included: searches, filtering, ordering and creation or addition of information</p>
      
      <p className="projectDet1"><b>Role: </b> Desing & Development.</p>
      <p className="projectDet2"><b>Made With: </b>JavaScript, React, Redux, CSS, HTML5, Express, Sequalize, Node, SQL </p>
 
      <img src={GamesImg} className="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
    <p className="project">Countries</p>
      <p className="projectDate">25 / 8 / 22</p>
      <p className="projectDet">includes: searches, filtering, ordering and creation or addition of information</p>
    
      <p className="projectDet1"><b>Role: </b> Desing & Development.</p>
      <p className="projectDet2"><b>Made With: </b>JavaScript, React, Redux, CSS, HTML5, Express, Sequalize, Node, SQL </p>
 
      
      <img src={CountryImg} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
    <p className="project">Svaly - Shifter</p>
      <p className="projectDate">25 / 10 / 20</p>
      <p className="projectDet">application to make daily reservations in gyms, with personal acount and stats</p>
      
      <p className="projectDet1"><b>Role: </b> Desing & Development.</p>
      <p className="projectDet2"><b>Made With: </b>JavaScript, React, Redux, CSS, HTML5, Express, Sequalize, Node, SQL </p>
      <img src={SvalyImg} className="d-block" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}