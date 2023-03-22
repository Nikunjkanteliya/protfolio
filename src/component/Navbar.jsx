import React from "react";
import style from "./style/nav.module.css";
const Navbar = () => {
  return (
    <div>
      <div className={style.mainheadnav}>
        <h3> Nikunj Kanteliya</h3>

        <ul className={style.ulist} style={{ listStyleType: "none" }}>
          <li className={style.llist}>Home</li>
          <li className={style.llist}>About</li>
          <li className={style.llist}>Skills</li>
          <li className={style.llist}>Projects</li>
          <li className={style.llist}>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
