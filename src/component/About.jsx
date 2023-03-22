import React from "react";
import style from "./style/about.module.css";
import { FaLaptopCode } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";


const About = () => {
  return (
    <div>
    
      <div className={style.maindivabout}>
        <span className={style.about} id={"open"} >About Me</span>
        <p className={style.aboutpt}>
          {" "}
          As a front end developer, I am passionate about creating visually
          appealing and engaging user experiences on the web. I have a deep
          understanding of HTML, CSS, and JavaScript, Reactjs,Redux and I use my
          skills to design and develop intuitive websites and applications that
          meet the needs of users.
          <br />
          <span className={style.usp}>
            Ultimately, my goal as a front end developer is to create web
            experiences that are not only functional and effective, but also
            beautiful and engaging.
          </span>
        </p>
      </div>
      <div className={style.icons}>
        <div style={{ textAlign: "center" }}>
          <FaLaptopCode className={style.icon} />
          <div>
            {" "}
            <span style={{ fontSize: "22px", fontWeight: "650" }}>
              LEARN
            </span>{" "}
            <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Love To Coding And Learning
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <BsPeopleFill className={style.icon} />
          <div>
            {" "}
            <span style={{ fontSize: "22px", fontWeight: "650" }}>
              DEVELOP
            </span>{" "}
            <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Love To Work With Teams
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <FaLightbulb className={style.icon} />
          <div>
            {" "}
            <span style={{ fontSize: "22px", fontWeight: "650" }}>
              SHARE
            </span>{" "}
            <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Love To Share Knowledge
            </span>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <BsFillCupHotFill className={style.icon} />
          <div>
            {" "}
            <span style={{ fontSize: "22px", fontWeight: "650" }}>
              TEA
            </span>{" "}
            <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Love To Drink Tea
            </span>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default About;
