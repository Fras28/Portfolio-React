import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <main id="blog">
      <div className="contenedor">
        <aside>
          <h3 className="titulo">Projects</h3>
          <nav className="indice">
            <a href="#BlockBuster">BlockBuster</a>
            <a href="#Countries">Countries</a>
            <a href="#VideoGames">VideoGames</a>
            <a href="#Svaly">Svaly</a>
            <a href="#whoIAm">Credentials</a>
          </nav>
        </aside>
        <div className="contenido" id="Projects">
          <div className="post blockBuster" id="BlockBuster">
            <a
              className="linksPr"
              href="https://blockbuster-pf.vercel.app/"
              target="_blank"
            >
              <h2 className="titulo1">Block Buster </h2>
            </a>
            <p className="fecha">Published on October 5, 2022</p>

            <p>
              ✨ The project consists of a streaming platform for renting movies
              and series.
              <br />
              ✨ This project was made with TypeScript, Sequelize, Express and
              PostgreSQL & Nodemailer notifications in the Back-End and React,
              Redux-Toolkit, Cloudinary, auth0 (google log-in) & Paypal payment
              in Front-End.
              <br />
              The project has a Google login, two memberships, silver and gold,
              which can be purchased through paypal payment, the option to add
              new movies, comments, edit user profiles, filters from A-Z and by
              genre. It also has an administrator panel with +40 features such
              as banning users, unbanning users, editing movies or series,
              searching for users by any data you have previously uploaded,
              sending notifications by email, etc.✨ The project consists of a
              streaming platform for renting movies and series. ✨ This project
              was made with TypeScript, sequalize, express and Postgres SQL &
              Nodemailer notifications in the Back-End and React, Redux-Toolkit,
              Cloudinary, auth0 (google log-in) & Paypal payment in Front-End.
              The project has a Google login, two memberships, silver and gold,
              which can be purchased through paypal payment, the option to add
              new movies, comments, edit user profiles, filters from A-Z and by
              genre. It also has an administrator panel with +40 features such
              as banning users, unbanning users, editing movies or series,
              searching for users by any data you have previously uploaded,
              sending notifications by email, etc. Aptitudes: JavaScript ·
              Node.js · Sequelize.js · Express.js · PostgreSQL · Redux.js ·
              React.js · TypeScript · Individual problem solving · Be decisive ·
              Work as a team · Provide assistance to team members · Work under
              pressure to meet objectives with certain dates · Constant learning
              · Adaptability to any circumstance{" "}
            </p>
          </div>
          <div className="post" id="Countries">
            <div className="bgCountries">
              <a className="linksPr" href="" target="_blank">
                <h2 className="titulo2">Info Countries</h2>
              </a>
              <p className="fecha">Published on August 10, 2022</p>
              <p className="textProj">
                This project consisted of creating an app that shows the updated
                information of all the countries of the world, for example its
                population, territory, flag, among other characteristics. This
                application also allows you to add the Activities to the country
                you choose and coordinate availability and duration schedules.
                <br />
                that includes: searches, filtering, ordering and creation or
                addition of tourist activities individual project. Working with
                Data Base
                <br />
                <br />
                languages: Front: JavaScript, React, Redux, CSS, HTML5
                <br />
                Back: Express, Sequalize, Node, SQL{" "}
              </p>
            </div>
          </div>
          <div className="post VideoGames" id="VideoGames">
            <a className="linksPr" href="" target="_blank">
              <h2 className="titulo3">Video Games Universe</h2>
            </a>
            <p className="fecha">Published on July 20, 2022</p>
            <p>
              It is a platform where approximately 250 games are shown with
              their information, such as launch sheet, creators, among others.
              <br />
              Topic: Retro Design App dedicated to find Information from more
              than 500.000 games data base API.
              <br /> Where users can filter, order, learn and even create their
              own games register.
              <br />
              <br />
              languages: Front: JavaScript, React, Redux, CSS, HTML5
              <br />
              Back: Express, Sequalize, Node, SQL
            </p>
          </div>
          <div className="post svaly" id="Svaly">
            <h2 className="titulo4">Svaly-shifts for gyms-</h2>
            <p className="fecha">Published on October 20, de 2020</p>
            <p>
              this was my own project in pandemi where I made an applicationto
              to make shift reservations in gyms This was my first project
              related to programming. Several Udemy courses and some internet
              guides helped me, it was practically done on my own in a
              self-taught format. I came up with this idea in the middle of the
              pandemic, when it was practically impossible to go to the gym to
              train... larger companies had the same idea and I didn't have the
              support to enter the market, anyway it was a great experience and
              it allowed me to deepen in everything that is the world of
              programation
              <br />
              languages: Front: JavaScript,CSS, HTML5
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Blog;
