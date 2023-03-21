import React from "react";
import style from "./style/project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Projects = () => {
  return (
    <div>
      <span className={style.animate}> Projects</span>

      <div className={style.card}>
        <div className={style.cardin}>
          <span className={style.card1}>SportsApp|(Web Application)</span>
          <p className={style.desc}>
            {" "}
            Live scores for various sports, including football, basketball,
            baseball, hockey, and more.Up-to-date information on current and
            upcoming matches, including team lineups, match time, and venue.
          </p>

          <span className={style.tech}> #React #Css #Reduxjs</span>
          <div>
            <Link to={"//github.com/Nikunjkanteliya/sport-app"} target="_blank">
              <AiFillGithub className={style.gitgo} />
            </Link>
            <Link to={"//46wuw9.csb.app/"} target="_blank">
              <BsGlobe className={style.globe} />
            </Link>
          </div>
        </div>

        <div className={style.cardin}>
          <span className={style.card1}>Thali Ordering|(Web Application)</span>
          <p className={style.desc}>
            I build a thali ordering app. And The user can customize the content
            of Thali. We can add or remove following items and change the
            quality of these items:- Chapati- Pickle- Curd- Sweet- Daal- Paneer
            Dish
          </p>
          <span className={style.tech}> #React #Css #Reduxjs</span>
          <div>
            <Link to={"//github.com/Nikunjkanteliya/thali-app"} target="_blank">
              <AiFillGithub className={style.gitgo} />
            </Link>
            <Link
              to={
                "//mini-project-using-routing-and-redux-nikunjkanteliya.august-full-time-2022.repl.co/aboutus"
              }
              target="_blank"
            >
              <BsGlobe className={style.globe} />
            </Link>
          </div>
        </div>

        <div className={style.cardin}>
          <span className={style.card1}>
            Movie Ticket Booking|(Web Application)
          </span>
          <p className={style.desc}>
            Created a Movie Ticket Booking Website which let users to select
            movie and select seats according to their Convinence with live
            trailor
          </p>
          <span className={style.tech}> #React #Css #Reduxjs</span>

          <div>
            <Link
              to={"//github.com/Nikunjkanteliya/ticketbooking"}
              target="_blank"
            >
              <AiFillGithub className={style.gitgo} />
            </Link>
            <Link to={"//3ot6h2.csb.app/"} target="_blank">
              <BsGlobe className={style.globe} />
            </Link>
          </div>
        </div>

        <div className={style.cardin}>
          <span className={style.card1} style={{ margin: "2rem" }}>
            Channelier Clone|(Web Application)
          </span>
          <p className={style.desc}>
            Cloned a website name as Channelier with all design and animation
            using html css and javascript it includes 3d animation as well
          </p>
          <span className={style.tech}> #HTML #Css #JavaScript</span>
          <div>
            <Link
              to={"//github.com/Nikunjkanteliya/webpage-clone"}
              target="_blank"
            >
              <AiFillGithub className={style.gitgo} />
            </Link>
            <Link to={"//yw6y2j.csb.app/"} target="_blank">
              <BsGlobe className={style.globe} />
            </Link>
          </div>
        </div>
      </div>
      <Link
        to={"//github.com/Nikunjkanteliya?tab=repositories"}
        target="_blank"
      >
        <button className={style.btnpro}>
          {" "}
          See All Projects <AiOutlineArrowRight className={style.arr} />
        </button>
      </Link>
    </div>
  );
};

export default Projects;
