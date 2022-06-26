import React, { useState } from "react";
import { Link } from "react-router-dom";
import ListCountry from "../ListCountry/ListCountry";
import Country from "../../pages/Country/Country";

const styleNav = {
  display: "flex",
  justifyContent: "space-around",
  textDecoration:"none"
};
const Navbar = () => {

  const [codeCountry, setCodeCountry] = useState('')

  return (
    <div style={styleNav}>
      <li><Link to="/home">Home</Link></li>
      <li><Link to="/"><ListCountry/></Link></li>
      <li><Link to="/about">About</Link></li>
    </div>
  );
};

export default Navbar;
