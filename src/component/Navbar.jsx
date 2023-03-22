import React from "react";
import style from "./style/nav.module.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className={style.mainheadnav}>
        <h3> Nikunj Kanteliya</h3>

        <ul className={style.ulist} style={{ listStyleType: "none" }}>
          <a href="#open0"><li className={style.llist} >Home</li></a>
          <a href="#open">  <li className={style.llist}>About</li></a>
         <a href="#open2"> <li className={style.llist}>Skills</li></a>
         <a href="#open3"> <li className={style.llist}>Projects</li></a>
        <a href="#open4">  <li className={style.llist}>Contact</li></a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
