import React from "react";
import { Link } from "react-router-dom";
import ListCountry from "../ListCountry/ListCountry";
import './Navbar.css'

const styleNav = {
  display: "flex",
  justifyContent: "space-around",
  textDecoration:"none",
  texttTansform:'uppercase'
};
const Navbar = () => {


  return (
    <div style={styleNav}>
      <li><Link to="/home"><p>Home</p></Link></li>
      <li><Link to="/"><ListCountry/></Link></li>
      <li><Link to="/about"><p>About</p></Link></li>
      {/* <li><Link to="/sort"><p>sort</p></Link></li> */}

    </div>
  );
};

export default Navbar;
