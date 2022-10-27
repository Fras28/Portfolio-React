import React from "react";
import "./credentials.css";

const click = ()=>{
    var acc = document.getElementsByClassName("accordion" || "accordionL");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
}

}
export const Credentials = () => {
 
  return (
    <div className="contenedor-imagen" id="whoIAm">
      <button onClick={click} className="accordion">Full Stack Developer</button>
      <div className="panel">
        <a
          className="linkCert"
          href="https://certificates.soyhenry.com/cert?id=98a42830-8ee6-492d-9b6a-55d092249020"
          target="_blank"
          rel="noreferrer">
          URL credenctial
        </a>
      </div>

      <button onClick={click} className="accordion">Front End Developer</button>
      <div className="panel">
        <a
          className="linkCert"
          href="https://www.linkedin.com/skill-assessments/Desarrollo%20front%20end/report/?channel=FEED_SHOWCASE&practiceMode=&vanityNameContext=francoselvarolo"
          target="_blank"
          rel="noreferrer">
          URL credenctial
        </a>
      </div>

      <button  onClick={click} className="accordion">React.js</button>
      <div className="panel">
        <a
          className="linkCert"
          href="https://www.linkedin.com/skill-assessments/React.js/report/?practiceModal=&practiceMode="
          target="_blank"
          rel="noreferrer"
        >
          URL credenctial
        </a>
      </div>
      <button onClick={click} className="accordion">English B2 Upper Intermediant</button>
      <div className="panel">
        <a
          className="linkCert"
          href="https://www.efset.org/cert/fubXwi"
          target="_blank"
          rel="noreferrer"
        >
          URL credenctial
        </a>
      </div>
      <button onClick={click} className="accordion">Cascading Style Sheets (CSS)</button>
      <div className="panel">
        <a
          className="linkCert"
          href="https://www.linkedin.com/skill-assessments/Hojas%20de%20estilos%20en%20cascada%20(CSS)/report/"
          target="_blank"
          rel="noreferrer"
        >
          URL credenctial
        </a>
      </div>
      <button onClick={click} className="accordion">Agile methodologies</button>
      <div className="panel">
        <a
          className="linkCert"
          href="https://www.linkedin.com/skill-assessments/Metodolog%C3%ADas%20%C3%A1giles/report/?practiceModal=&practiceMode="
          target="_blank"
          rel="noreferrer"
        >
          URL credenctial
        </a>
      </div>      
    </div>
  );
};
