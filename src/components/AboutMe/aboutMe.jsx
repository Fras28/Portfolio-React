import React from "react";
import "./aboutMe.css";
import htmlImg from "../assets/iconosSkills/html.png";
import css3 from "../assets/iconosSkills/css-3.png";
import reactImg from "../assets/iconosSkills/React.png";
import reduxImg from "../assets/iconosSkills/Redux.png";
import jsImg from "../assets/iconosSkills/jsImg.png";
import bootImg from "../assets/iconosSkills/Bootstrap.png";
import node from "../assets/iconosSkills/nodejs.png";
import typeImg from "../assets/iconosSkills/Typescript.svg.png";
import postgres from "../assets/iconosSkills/Postgresql.svg.png";
import seque from "../assets/iconosSkills/sequelize.png";
import gitImg from "../assets/iconosSkills/gitHub.png";

export const AbourMe = () => {
  return (
    <div className="aboutMe" id="aboutMe">
      <div className="divSep">
        <svg
          width="671"
          height="50"
          viewBox="0 0 671 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M670.24 23.6267C670.172 23.4704 670.047 23.3559 669.959 23.21C669.745 22.8559 669.511 22.5277 669.204 22.2569C669.151 22.21 669.131 22.1423 669.079 22.0954L650.412 7.10609C649.672 6.51234 648.761 6.18942 647.813 6.18942H610.48C608.188 6.18942 606.334 8.04356 606.334 10.3353C606.334 12.627 608.188 14.4812 610.48 14.4812H646.354L654.682 21.1843H513.082C511.103 9.72586 501.155 0.970917 489.14 0.970917C477.129 0.970917 467.181 9.72612 465.197 21.1843H448.9L378.009 11.7936C376.358 11.58 374.712 12.3769 373.879 13.83L369.629 21.1841H352.202L338.593 7.56943C337.035 6.01209 334.28 6.01209 332.728 7.56943L319.114 21.1841H301.687L297.442 13.83C296.609 12.3769 294.937 11.5748 293.312 11.7936L222.421 21.1843H206.124C204.139 9.72586 194.192 0.970917 182.181 0.970917C170.166 0.970917 160.217 9.72612 158.239 21.1843H16.6385L24.9719 14.4916H60.8465C63.1383 14.4916 64.9924 12.6374 64.9924 10.3457C64.9924 8.05398 63.1383 6.19984 60.8465 6.19984H23.5132C22.5653 6.19984 21.6487 6.52276 20.9143 7.11651L2.24759 22.1058C2.19551 22.1475 2.17467 22.2204 2.12259 22.2673C1.8153 22.5381 1.58093 22.8663 1.36738 23.2204C1.27884 23.3663 1.15904 23.4808 1.08612 23.6371C0.846534 24.1475 0.695496 24.7152 0.695496 25.3298C0.695496 25.9443 0.841339 26.512 1.08091 27.0328C1.14862 27.1891 1.27362 27.3036 1.36216 27.4495C1.57571 27.8036 1.81009 28.1318 2.11738 28.4026C2.16946 28.4495 2.1903 28.5172 2.24238 28.5641L20.909 43.5534C21.6486 44.1419 22.5653 44.4649 23.5132 44.4649H60.8465C63.1382 44.4649 64.9924 42.6107 64.9924 40.319C64.9924 38.0272 63.1382 36.1731 60.8465 36.1731L24.9718 36.1679L16.6385 29.4752H158.239C160.218 40.9336 170.166 49.6886 182.181 49.6886C194.192 49.6886 204.14 40.9334 206.124 29.4752H222.421L293.312 38.8659C293.489 38.8919 293.676 38.9024 293.854 38.9024C295.322 38.9024 296.697 38.1263 297.442 36.8294L301.692 29.4753H319.119L332.728 43.0899C333.504 43.866 334.561 44.3035 335.66 44.3035C336.764 44.3035 337.817 43.866 338.593 43.0899L352.207 29.4753H369.634L373.879 36.8294C374.623 38.1263 376.004 38.9024 377.467 38.9024C377.644 38.9024 377.832 38.8919 378.009 38.8659L448.9 29.4752H465.197C467.181 40.9336 477.129 49.6886 489.14 49.6886C501.155 49.6886 511.104 40.9334 513.082 29.4752H654.682L646.349 36.1679H610.474C608.183 36.1679 606.328 38.022 606.328 40.3138C606.328 42.6055 608.183 44.4596 610.474 44.4596H647.808C648.756 44.4596 649.672 44.1367 650.406 43.543L669.073 28.5536C669.125 28.512 669.146 28.4391 669.198 28.3922C669.505 28.1214 669.74 27.7932 669.953 27.4391C670.042 27.2932 670.162 27.1786 670.235 27.0224C670.474 26.512 670.625 25.9443 670.625 25.3297C670.625 24.7152 670.474 24.1474 670.24 23.6266L670.24 23.6267ZM182.187 41.392C173.333 41.392 166.119 34.1838 166.119 25.3294C166.119 16.475 173.327 9.26669 182.187 9.26669C191.041 9.26669 198.249 16.475 198.249 25.3294C198.249 34.1838 191.041 41.392 182.187 41.392ZM291.656 30.2775L254.281 25.3296L291.656 20.3817L294.515 25.3296L291.656 30.2775ZM335.667 34.2931L326.708 25.3295L335.667 16.3659L344.625 25.3295L335.667 34.2931ZM379.677 30.2775L376.818 25.3296L379.677 20.3817L417.052 25.3296L379.677 30.2775ZM489.147 41.392C480.293 41.392 473.079 34.1838 473.079 25.3294C473.084 16.4752 480.292 9.26669 489.147 9.26669C498.006 9.26669 505.215 16.475 505.215 25.3294C505.215 34.1838 498.006 41.392 489.147 41.392Z"
            fill="#727272"
          />
        </svg>
      </div>
      <div className="aboutMeContainer">
        <div className="left">
          <p className="skills">Skills</p>
          <ul className="tecnoUl">
            <li className="row">
              <img src={htmlImg} className="iconTecno" alt="..." />
              <div className="fondoBar">
                <div className="barraHTML"><p>Proficient</p></div>
              </div>
            </li>
            <li className="row">
              <img src={css3} className="iconTecno" alt="..." />{" "}
              <div className="fondoBar">
                <div className="barraCSS"><p>Competent</p></div>
              </div>
            </li>
            <li className="row">
              {" "}
              <img src={reactImg} className="iconTecno" alt="..." />
              <div className="fondoBar">
                <div className="barraReact"><p>Competent</p></div>
              </div>
            </li>
            <li className="row">
              <img src={reduxImg} className="iconTecno" alt="..." />
              <div className="fondoBar">
                {" "}
                <div className="barraRedux"><p>Competent</p></div>
              </div>
            </li>
            <li className="row">
              <img src={jsImg} className="iconTecno" alt="..." />
              <div className="fondoBar">
                {" "}
                <div className="barraJS"><p>Proficient</p></div>
              </div>
            </li>
            <li className="row">
              <img src={bootImg} className="iconTecno" alt="..." />{" "}
              <div className="fondoBar">
                <div className="barraBoot">Proficient</div>
              </div>
            </li>
            <li className="row">
              <img src={node} className="iconTecno" alt="..." />{" "}
              <div className="fondoBar">
                <div className="barraNode"> <p>Advanced Beginner</p></div>
              </div>
            </li>
            <li className="row">
              <img src={typeImg} className="iconTecno" alt="..." />{" "}
              <div className="fondoBar">
                <div className="barraTS"> <p>Advanced Beginner</p></div>
              </div>
            </li>
            <li className="row">
              <img src={postgres} className="iconTecno" alt="..." />
              <div className="fondoBar">
                {" "}
                <div className="barraPostgre"><p>Advanced Beginner</p></div>
              </div>
            </li>
            <li className="row">
              <img src={seque} className="iconTecno" alt="..." />
              <div className="fondoBar">
                {" "}
                <div className="barraSeque"><p>Advanced Beginner</p></div>
              </div>
            </li>
            <li className="row">
              <img src={gitImg} className="iconTecno" alt="..." />{" "}
              <div className="fondoBar">
                <div className="barraGit"><p>Advanced Beginner</p></div>
              </div>
            </li>
          </ul>
          <p className="tecnolog">
        LINK ⇛
        <a
          className="skillLvl"
          href="https://icombine.net/knowledge-base/skill-levels"
          target="_blank"
          rel="noreferrer"
        >
          What Skill Level should I pick?
        </a>
      </p>
        </div>
        <div className="right">
          <p className="aboutTitle"> About me</p>
          <p className="aboutSubtitle">
           I'm  very autodidact and independent person, proof of this the health store i own for 7 years. <br/>
            After that I decided to focus on my other passions, such as programming. During
            the pandemic I made the decision to turn my life around and give it
            a new focus, that's when I started taking HTML, CSS and JavaScript
            courses on Udemy, which allowed me to carry out several projects. I
            realized that I was passionate about programming and decided to go
            deeper into this world so I ended up
            enrolling in the programming bootcamp "Soy Henry" where I improved
            and learned new technologies
          </p>
        </div>
      </div>
     
    </div>
  );
};
