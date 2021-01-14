import React from "react";
import "./NaviBar.css";
import { Link } from "react-router-dom";
function NaviBar(){
  /*navigation bar with buttons to link to different page*/
  return  (
  <div>
  <div className="topnav">
  <a className="brand" href="#brand">Turbindr</a>
  <input type="text" placeholder="PLZ.."></input>
  <Link to="/karte"><a>Karte</a></Link>
  <Link to="/statistik"><a>Statistik</a></Link>
  <Link to="/info"><a>Info</a></Link>
  <Link to="/kontakt"><a>Kontakt</a></Link>
 </div>
  </div>);
}

export default NaviBar;