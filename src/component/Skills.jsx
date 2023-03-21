import React from "react";
import style from "./style/skills.module.css";
import { FaReact } from "react-icons/fa";
import { IoPeopleOutline } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { ImHtmlFive } from "react-icons/im";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { FiFigma } from "react-icons/fi";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { AiTwotoneApi } from "react-icons/ai";

const Skills = () => {
  return (
    <div>
      <div className={style.maindivskill}>
        <span className={style.skills}>Skills</span>
        <div className={style.skillicons}>
          <span className={style.mar}>
            <FaReact style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              React.js
            </span>
          </span>
          <span className={style.mar}>
            {" "}
            <SiTypescript style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              TypeScript
            </span>
          </span>

          <span className={style.mar}>
            <IoPeopleOutline style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              {" "}
              Team Player
            </span>
          </span>
        </div>

        {/* --------------------------------------------- */}

        <div className={style.skillicons}>
          <span className={style.mar}>
            <SiJavascript style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              JavaScript
            </span>
          </span>
          <span className={style.mar}>
            {" "}
            <FaGitSquare style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Git
            </span>
          </span>

          <span className={style.mar}>
            <BsFillQuestionCircleFill style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              {" "}
              Critical Thinking
            </span>
          </span>
        </div>

        {/* -------------------------------------------- */}

        <div className={style.skillicons}>
          <span className={style.mar}>
            <ImHtmlFive style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              HTML
            </span>
          </span>
          <span className={style.mar}>
            {" "}
            <FiFigma style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Figma
            </span>
          </span>

          <span className={style.mar}>
            <IoPeopleOutline style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              {" "}
              Creativity Skills
            </span>
          </span>
        </div>

        {/* --------------------------------- */}
        <div className={style.skillicons}>
          <span className={style.mar}>
            <TbBrandRedux style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Redux.js
            </span>
          </span>
          <span className={style.mar}>
            {" "}
            <IoLogoCss3 style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              CSS
            </span>
          </span>

          <span className={style.mar}>
            <IoPeopleOutline style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              {" "}
              Problem Solver
            </span>
          </span>
        </div>
        {/* ////////////////////////////////// */}
        <div className={style.skillicons}>
          <span className={style.mar}>
            <IoLogoFirebase style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Firebase
            </span>
          </span>
          <span className={style.mar}>
            {" "}
            <FaBootstrap style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              Bootstrap
            </span>
          </span>

          <span className={style.mar}>
            <AiTwotoneApi style={{ fontSize: "40px" }} /> <br />
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#2836b1" }}
            >
              {" "}
              REST API
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
