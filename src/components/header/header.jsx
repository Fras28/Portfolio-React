import React from "react";
import "./header.css";
import fotoPerfil from "../assets/perfil s-fondo.png"

const Header = () => {
  return (
    <>
      <header id="inicio">
        <nav className="navbar">
          <div className="contenedor">
            <a href="#Projects"><b>Projects</b></a>
            <a href="#whoIAm"><b>Credenctials</b></a>
            <a Target="_blank" href="mailto:fselvarolo28@gmail.com"><b>Contact</b></a>
          </div>
        </nav>
        <div className="contemedorCard bg">
          <div className="card">
            <img
              className="imgInicio"
              src={fotoPerfil}
              alt=""
            />
            <p className="myInfo">
              <b className="me">
                Im Franco Selvarolo and I am a Full Stack Developer from
                Argentina
              </b>
              <br />
              <b>-I.T. <a href="#Projects">Projects</a>:<br/></b> 
              The first was an application that allowed you to book your gym sessions. I got the idea when gyms started opening for small groups during the COVID pandemic.   
              <br/>The first one was an application that allowed you to book your gym sessions. I got the idea when gyms started to open for small groups during the COVID pandemic. Then there were two informative websites, the former about videogames and the latter about countries.
              <br/>The last one was a streaming platform, where I had the opportunity to revive the Blockbuster essence. This was the most demanding because I had to do the whole back-end from scratch and iterate the front-end which wasn't working as expected.
              <br/>
              <b>-Background:</b><br/>
              I owned a health food store for more than 7 years. Over the years you start to take care of yourself more and that's precisely why I turned to selling supplements and sportswear. In the last 7 years, I decided to focus on my other passions, such as programming. During the pandemic I made the decision to turn my life around and give it a new focus, that's when I started taking HTML, CSS and JavaScript courses on Udemy, which allowed me to carry out several projects. I realized that I was passionate about programming and decided to go deeper into programming and other technologies so I ended up enrolling in the programming bootcamp "Soy Henry" where I perfected and learned new technologies.
              <br />
              <b>-About me:</b><br/> I am a responsable and dedicated person that puts effort in every deliverable. I always try to do my best and keep on learning in every project where I am involved.
              <br />
              <b>-Free time:</b><br/> As for my free time, I go to the gym everyday, maintaining myself active helps me organize my mind. I also like to spend time with my family and girlfriend, with whom I share the fitness passion.
              <br/>
              <b>-Core skills:</b><br/> Teamwork, smart work and problem solving</p>
            <div className="card-hidden">
              <div className="grafico">
                <strong
                  className="barra"
                >
                  <p className="tecnology">HTML</p>
                </strong>
              </div>
              <div className="grafico1">
                <strong
                  className="barra1"
                  //   style={`width: 70%; background-color: lightskyblue; color: black;`}
                >
                  <p className="tecnology">CSS</p>
                </strong>
              </div>
              <div className="grafico2">
                <strong
                  className="barra2"
                  //   style={`width: 85%; background-color: #EFD81D; color: black;`}
                >
                  <p className="tecnology">JavaScript</p>
                </strong>
              </div>
              <div className="grafico3">
                <strong
                  className="barra3"
                  //   style={`width: 60%; background-color: #00D5F7; color: black;`}
                >
                  <p className="tecnology">React</p>
                </strong>
              </div>
              <div className="grafico4">
                <strong
                  className="barra4"
                  //   style={`width: 65%; background-color: #7649BB; color: black;`}
                >
                  <p className="tecnology">Redux/Redux-Toolkit</p>
                </strong>
              </div>
              <div className="grafico5">
                <strong
                  className="barra5"
                  //   style={`width: 80%; background-color: #6D11EE; color: black;`}
                >
                  <p className="tecnology">Bootstrap</p>
                </strong>
              </div>
              <div className="grafico6">
                <strong
                  className="barra6"
                  //   style={`width: 60%; background-color: #8BBF3D; color: white;`}
                >
                  <p className="tecnology">Node.js</p>
                </strong>
              </div>
              <div className="grafico7">
                <strong
                  className="barra7"
                  //   style={`width: 60%; background-color: #3A72BD; color: white;`}
                >
                  <p className="tecnology">Sequelize</p>
                </strong>
              </div>
              <div className="grafico8">
                <strong
                  className="barra8"
                  //   style={`width: 65%; background-color: #2F74C0; color: white;`}
                >
                  <p className="tecnology">TypeScript</p>
                </strong>
              </div>
              <div className="grafico9">
                <strong
                  className="barra9"
                  //   style={`width: 80%; background-color: #31648C; color: white;`}
                >
                  <p className="tecnology">PostgreSQL</p>
                </strong>
              </div>
              <div className="grafico10">
                <strong
                  className="barra10"
                  //   style={`width: 70%; background-color: black; color: white;`}
                >
                  <p className="tecnology">Git</p>
                </strong>
              </div>
            </div>
          </div>
          <div className="card-border"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
