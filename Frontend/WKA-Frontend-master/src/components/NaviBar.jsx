import React from "react";
import "./NaviBar.css";
import { Link } from "react-router-dom";
function NaviBar(){
  return  (
  <div>
  <div className="topnav">
  <a className="brand" href="#brand">Turbindr</a>
  <input type="text" placeholder="PLZ.."></input>
  <Link to="/karte"><a>Karte</a></Link>
  <Link to="/details"><a>Details</a></Link>
  <Link to="/statistik"><a>Stastik</a></Link>
  <Link to="/info"><a>Info</a></Link>
  <Link to="/kontakt"><a>Kontakt</a></Link>
 </div>
  </div>);
}

export default NaviBar;