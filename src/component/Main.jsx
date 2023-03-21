import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { AiFillInstagram } from "react-icons/ai";
import { HiOutlineDownload } from "react-icons/hi";
import { Link } from "react-router-dom";
import style from "./style/main.module.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import DemoCarousel from "./Carsoule";

const Main = () => {
  return (
    <div>
      <div className={style.allsvg}>
        <Link
          to={"//www.linkedin.com/in/nikunj-kanteliya-043859209/"}
          target="_blank"
        >
          <BsLinkedin />
        </Link>
        <Link to={"//github.com/Nikunjkanteliya"} target="_blank">
          <AiFillGithub />
        </Link>
        <Link to={"//mail.google.com"} target="_blank">
          <CgMail />
        </Link>
        <Link to={"//www.instagram.com/nikunjkanteliya/"} target="_blank">
          <AiFillInstagram />
        </Link>
      </div>
      <div className={style.intro}>
        <span className={style.hello}> Hello,</span>
        <span className={style.pass}>I`m passionate about</span>
        <span className={style.web}>
          {" "}
          <span className={style.animate}>WEB DEVELOPMENT</span>
        </span>
      </div>

      <button className={style.btndiv}>
        <span className={style.down}>
          <a
            href="https://drive.google.com/file/d/1-BYuoJ7Aa5tWWikNJIBScR8RvSr5GwOo/view?usp=share_link"
            download={"resume"}
            target="_blank"
          >
            {" "}
            DOWNLOAD MY RESUME
          </a>{" "}
          <HiOutlineDownload />
        </span>
      </button>
      <DemoCarousel />
      {/* <img
        src="https://o.remove.bg/downloads/bb8fcd68-f40b-4456-b4d7-3d5d4f23d5d9/hacker-operating-laptop-cartoon-icon-illustration-technology-icon-concept-isolated-flat-cartoon-style_138676-2387-removebg-preview.png"
        alt=""
        className={style.codingimg}
      /> */}

      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
