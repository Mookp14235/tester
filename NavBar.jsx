import React, { useState } from "react";
import "../Navbar/NavBar.css";
import {Link} from "react-router-dom";
import Test1 from "../page/Test1";
import home from "../page/Home"

function Navbar() {
const [active, setActive] = useState("nav_bar");

  return (
    <div className="navbar">
        <div className="navbar_logo">
        MOOKPPPP
        </div>
        <nav className="navbar_item">
          <ul>
          <li className="nav_item2">
            <a className="nav_item"><Link to="/">Home</Link></a>
          </li>
          <li className="nav_item2">
            <a className="nav_item"><Link to='/Test1'>Test1</Link></a>
          </li>
          <li className="nav_item2">
            <a className="nav_item"><Link to='/Test2'>Test2</Link></a>
          </li>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;