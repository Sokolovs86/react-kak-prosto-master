import React from "react";
import { NavLink } from "react-router-dom";
import ss from "./Navbar.module.css";

// let c1 = "item";
// let c2 = "active";
// // "item active"
// let classes = c1 + "" + c2;
// // let classesNew = `${c1} ${c2}`;
// let classesNew = `${ss.item} ${ss.active}`;

const Navbar = () => {
  return (
    <nav className={ss.nav}>
      <div className={ss.item}>
        <NavLink to="/profile" activeClassName={ss.activeLink}>
          Profile
        </NavLink>
      </div>
      <div className={`${ss.item} ${ss.active}`}>
        <NavLink to="/dialogs" activeClassName={ss.activeLink}>
          Messages
        </NavLink>
      </div>
      <div className={ss.item}>
        <NavLink to="/news" activeClassName={ss.activeLink}>
          News
        </NavLink>
      </div>
      <div className={ss.item}>
        <NavLink to="/music" activeClassName={ss.activeLink}>
          Music
        </NavLink>
      </div>
      <div className={ss.item}>
        <NavLink to="settings" activeClassName={ss.activeLink}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
