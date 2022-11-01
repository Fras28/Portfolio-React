import React from "react";
import "./aboutMe.css"

import { FaReact} from 'react-icons/fa';
import Separador from "../assets/separador1.png"
import htmlImg from "../assets/html.png"
import css3 from "../assets/css-3.png"
import reactImg from "../assets/React.png"
import reduxImg from "../assets/Redux.png"
import jsImg from "../assets/jsImg.png"
import bootImg from "../assets/Bootstrap.png"




export const AbourMe =()=>{

    return(
        <>
        <div className="divSep"> <img className="separador" src={Separador} alt=""></img></div>
        <div className="aboutMeContainer" id="aboutMe">
            <div className="left">
            <p className="skills">Skills</p>
                <ul className="tencoUl">
                    <li className="row"><img src={htmlImg} className="iconTecno" alt="..."/><div className="fondoBar"><div className="barraHTML" >Proficient</div></div></li>
                    <li className="row"><img src={css3} className="iconTecno" alt="..."/> <div className="fondoBar"><div className="barraCSS">Competent</div></div></li>
                    <li className="row"> <img src={reactImg} className="iconTecno" alt="..."/><div className="fondoBar"><div className="barraReact">Competent</div></div></li>
                    <li className="row"><img src={reduxImg} className="iconTecno" alt="..."/><div className="fondoBar"> <div className="barraRedux">Competent</div></div></li>
                    <li className="row"><img src={jsImg} className="iconTecno" alt="..."/><div className="fondoBar"> <div className="barraJS">Competent+</div></div></li>
                    <li className="row"><img src={bootImg} className="iconTecno" alt="..."/> <div className="fondoBar"><div className="barraBoot">Competent</div></div></li>
                    <li className="row"><p className="tecnology">Node</p> <div className="fondoBar"><div className="barraNode"> Advanced Beginner</div></div></li>
                    <li className="row"><p className="tecnology">TypeScript</p> <div className="fondoBar"><div className="barraTS"> Advanced Beginner</div></div></li>
                    <li className="row"><p className="tecnology">PostgreSQL</p><div className="fondoBar"> <div className="barraPostgre">Advanced Beginner</div></div></li>
                    <li className="row"><p className="tecnology">Sequelize</p><div className="fondoBar"> <div className="barraSeque">Advanced Beginner</div></div></li>
                   <li className="row"><p className="tecnology">Git</p> <div className="fondoBar"><div className="barraGit">Advanced Beginner</div></div></li>
                </ul>
            </div>
            <div className="right">
                <p className="aboutTitle"> About me</p>
                <p className="aboutSubtitle">
I owned a health food store for more than 7 years. Over the years you start to take care of yourself more and that's precisely why I turned to selling supplements and sportswear. In the last 7 years, I decided to focus on my other passions, such as programming. During the pandemic I made the decision to turn my life around and give it a new focus, that's when I started taking HTML, CSS and JavaScript courses on Udemy, which allowed me to carry out several projects. I realized that I was passionate about programming and decided to go deeper into programming and other technologies so I ended up enrolling in the programming bootcamp "Soy Henry" where I perfected and learned new technologie
</p>
            </div>
        </div>
        <p className="tecnology">LINK  ⇛<a className="skillLvl" href="https://icombine.net/knowledge-base/skill-levels" target="_blank"  rel="noreferrer">What Skill Level should I pick?</a></p>
        </>
    )
}